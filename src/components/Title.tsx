type Props = {
  text: string;
  isRight?: boolean;
};

function Title({ text, isRight = false }: Props) {
  return (
    <h1
      className={`text-center text-sm font-bold uppercase text-cyan-500 ${
        isRight ? 'md:text-right' : 'md:text-left'
      }`}
    >
      {text}
    </h1>
  );
}

export { Title };
export type { Props as TitleProps };
