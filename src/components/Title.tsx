type Props = {
  text: string;
  isRight?: boolean;
};

function Title({ text, isRight = false }: Props) {
  return (
    <h1
      className={`text-center text-sm font-bold uppercase ${
        isRight ? 'md:text-right' : 'md:text-left'
      } text-cyan-500`}
    >
      {text}
    </h1>
  );
}

export { Title };
export type { Props as TitleProps };
