type Props = {
  text: string;
  isRight?: boolean;
};

function Subtitle({ text, isRight = false }: Props) {
  return (
    <h1
      className={`my-2 text-4xl font-extrabold text-center text-black ${
        isRight ? 'md:text-right' : 'md:text-left'
      }`}
    >
      {text}
    </h1>
  );
}

export { Subtitle };
export type { Props as SubtitleProps };
