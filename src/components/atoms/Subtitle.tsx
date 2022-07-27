type Props = {
  text: string;
};

function Subtitle({ text }: Props) {
  return (
    <h1 className="my-2 text-4xl font-extrabold text-center text-black md:text-left">
      {text}
    </h1>
  );
}

export { Subtitle };
export type { Props as SubtitleProps };
