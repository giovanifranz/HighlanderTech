type Props = {
  text: string;
  isRight?: boolean;
};

function Subtitle({ text, isRight = false }: Props) {
  return (
    <h2
      className={`my-2 text-center text-4xl font-extrabold text-black ${
        isRight ? 'md:text-right' : 'md:text-left'
      }`}
    >
      {text}
    </h2>
  );
}

export { Subtitle };
export type { Props as SubtitleProps };
