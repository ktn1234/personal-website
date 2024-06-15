export function uniqueTotalTimeString(
  intervals: { startTime: Date; endTime: Date }[]
): string {
  interface UniqueTime {
    startTime: Date;
    endTime: Date;
    diff: number;
  }

  const uniqueTime: UniqueTime[] = [];
  intervals.sort((a, b) => a.startTime.getTime() - b.startTime.getTime());

  for (let i = 0; i < intervals.length; i++) {
    const { startTime, endTime } = intervals[i];

    // First interval - interval is ALWAYS unique
    if (uniqueTime.length === 0) {
      uniqueTime.push({
        startTime: startTime,
        endTime: endTime,
        diff: endTime.getTime() - startTime.getTime(),
      });
      continue;
    }

    /**
     * Unique interval conditions:
     * 1. If the start time is greater than the last end time
     * 2. If the start time is equal to the last end time
     */
    const { endTime: uniqueEndTime } = uniqueTime[uniqueTime.length - 1];
    if (
      startTime > uniqueEndTime ||
      startTime.getTime() === uniqueEndTime.getTime()
    ) {
      uniqueTime.push({
        startTime: startTime,
        endTime: endTime,
        diff: endTime.getTime() - startTime.getTime(),
      });
      continue;
    }

    /**
     * Unique interval conditions:
     * 1. If the start time is less than the last end time AND the end time is greater than the last end time
     */
    if (
      startTime < uniqueEndTime &&
      endTime.getTime() > uniqueEndTime.getTime()
    ) {
      uniqueTime.push({
        startTime: uniqueEndTime,
        endTime: endTime,
        diff: endTime.getTime() - uniqueEndTime.getTime(),
      });
      continue;
    }

    // Getting here means the start time is less than the last end time and the end time is less than the last end time, so we skip this interval since it's not unique and it is an overlap
  }

  const totalTime = uniqueTime.reduce((acc, curr) => {
    return acc + curr.diff;
  }, 0);
  const totalYears = (totalTime / (1000 * 60 * 60 * 24 * 365)).toFixed(2);

  return totalYears;
}

export function timeDiffString(start: Date, end: Date): string {
  const years = end.getFullYear() - start.getFullYear();

  const months = end.getMonth() - start.getMonth();
  const monthString = (months: number) =>
    months === 1 ? `${months} month` : `${months} months`;

  if (months > 0 && years === 0) {
    return monthString(months);
  }

  if (months < 0 && years - 1 === 0) {
    return monthString(12 + months);
  }

  return `${years - 1} years, ${monthString(12 + months)}`;
}

export function isToday(date: Date): boolean {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}
