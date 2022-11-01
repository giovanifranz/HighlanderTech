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
        isPurple ? 'bg-purple-100 border-purple-500' : 'border-cyan-400'
      } w-52 h-72 rounded-xl gap-5 flex justify-center items-center text-center border-4 border-solid flex-col transition-all`}
    >
      <Icon size={55} />
      <span className="text-lg font-bold">{title}</span>
      <span className="text-xs font-semibold w-10/12">{description}</span>
    </div>
  );
}

export { Contato };
export type { Props as ContatoProps };
