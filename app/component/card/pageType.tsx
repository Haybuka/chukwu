import React from 'react';
import HomeCard from './homeCard';
import ArticleCard from './articleCard';

type PageTypeProp = {
  page: 'article' | 'home';
  card: CardUi;
  fullWidth: boolean;
};

const PageType = ({ page, card, fullWidth }: PageTypeProp) => {
  switch (page) {
    case 'article':
      return <ArticleCard card={card} fullWidth={fullWidth} />;
    case 'home':
      return <HomeCard card={card} fullWidth={fullWidth} />;
    default:
      break;
  }
};

export default PageType;
