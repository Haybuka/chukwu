import React from 'react';
import Card from '../card';
import styles from './featured.module.css';

type FeaturedProps = {
  title: string;
  details: CardUi[];
  fullwidth: boolean;
  page: 'home' | 'article';
};

const Featured = ({ title, details, fullwidth, page }: FeaturedProps) => {
  return (
    <aside>
      <div className={!fullwidth ? styles.featured : ''}>
        {details.map((detail, id) => (
          <Card fullWidth={fullwidth} key={id} card={detail} page={page} />
        ))}
      </div>
    </aside>
  );
};

export default Featured;
