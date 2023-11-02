import React from 'react';
import cls from 'classnames';
import styles from './card.module.css';
import PageType from './pageType';

type CardProps = {
  fullWidth: boolean;
  page: 'article' | 'home';
  card: CardUi;
};

const Card = ({ fullWidth, card, page }: CardProps) => {
  return <PageType card={card} page={page} fullWidth={fullWidth} />;
};

export default Card;
