type Props = {
  text: string;
};

function Title({ text }: Props) {
  return (
    <h1 className="text-sm font-bold text-center uppercase md:text-left text-cyan-500">
      {text}
    </h1>
  );
}

export { Title };
export type { Props as TitleProps };
