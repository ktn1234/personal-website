import { isToday, timeDiffString } from "../utils/time";

interface ExperienceTimeProps {
  startTime: Date;
  endTime: Date;
}

function ExperienceTime({
  startTime,
  endTime,
}: ExperienceTimeProps): JSX.Element {
  return (
    <p className="text-quaternary">
      {startTime.toLocaleString("default", { month: "long" })}{" "}
      {startTime.getFullYear()} -{" "}
      {isToday(endTime)
        ? "Present"
        : `${endTime.toLocaleString("default", {
            month: "long",
          })} ${endTime.getFullYear()}`}{" "}
      <span className="text-tertiary">
        {`(${timeDiffString(startTime, endTime)})`}
      </span>
    </p>
  );
}

export default ExperienceTime;
