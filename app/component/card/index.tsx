import React from 'react';
import cls from 'classnames';
import styles from './card.module.css';

type CardProps = {
  fullWidth: boolean;
  card: {
    name: string;
    description: string;
    stack: string;
    link: string;
  };
};

const Card = ({ fullWidth, card }: CardProps) => {
  return (
    <aside className={cls(styles.card, fullWidth ? 'w-full' : 'col-span-6')}>
      <h4 className="text-white text-xl">{card.name}</h4>
      <p className=" text-portfolio-400 text-[0.65rem] uppercase my-2">
        {card.stack}
      </p>
      <p className="text-portfolio-100 text-sm my-3">{card.description}</p>
      <p className=" text-portfolio-400 my-3 text-sm">
        <span></span>
        <span>Live</span>
      </p>
    </aside>
  );
};

export default Card;
