interface TextButtonProps {
  text: string;
}

function TextButton({ text }: TextButtonProps): JSX.Element {
  return (
    <div className="bg-secondary rounded-2xl px-2 py-1 text-center truncate">
      <p>{text}</p>
    </div>
  );
}

export default TextButton;
