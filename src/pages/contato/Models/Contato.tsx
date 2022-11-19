import type { IconType } from 'react-icons';

type Props = {
  Icon: IconType;
  title: string;
  description: string;
  isPurple?: boolean;
};

function Contato({ Icon, title, description, isPurple = false }: Props) {
  return (
    <div
      className={`${
        isPurple ? 'border-purple-500 bg-purple-100' : 'border-cyan-400'
      } flex h-72 w-52 flex-col items-center justify-center gap-5 rounded-xl border-4 border-solid text-center transition-all`}
    >
      <Icon size={55} />
      <span className="text-lg font-bold">{title}</span>
      <span className="w-10/12 text-xs font-semibold">{description}</span>
    </div>
  );
}

export { Contato };
export type { Props as ContatoProps };
