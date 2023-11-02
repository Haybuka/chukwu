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
    <>
      <h3 className="text-portfolio-100 uppercase text-[0.75rem] my-6">
        {title}
      </h3>
      <div className={!fullwidth ? styles.featured : ''}>
        {details.map((detail, id) => (
          <Card fullWidth={fullwidth} key={id} card={detail} page={page} />
        ))}
      </div>
    </>
  );
};

export default Featured;
