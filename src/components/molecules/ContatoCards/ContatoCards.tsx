import { memo } from "react";
import type { IconType } from "react-icons";

import styles from "./contato-cards.module.css";

type Props = {
  Icon: IconType;
  title: string;
  description: string;
  isPurple?: boolean;
};

const ContatoCards = memo(
  ({ Icon, title, description, isPurple = false }: Props) => (
    <div
      className={`${
        isPurple ? "bg-purple-100 border-purple-500" : "border-cyan-400"
      } ${styles.wrapper}`}
    >
      <Icon size={55} />
      <span className={styles.title}>{title}</span>
      <span className={styles.text}>{description}</span>
    </div>
  )
);

export { ContatoCards };
export type { Props as ContatoCardsProps };
