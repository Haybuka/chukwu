import React from 'react';
import Card from '../card';
import styles from './featured.module.css';

type FeaturedProps = {
  title: string;
  featured: Card[];
  fullwidth: boolean;
};

type Card = {
  name: string;
  description: string;
  stack: string;
  link: string;
};

const Featured = ({ title, featured, fullwidth }: FeaturedProps) => {
  return (
    <>
      <h3 className="text-portfolio-100 uppercase text-[0.75rem] my-6">
        {title}
      </h3>
      <div className={!fullwidth ? styles.featured : ''}>
        {featured.map((feature, id) => (
          <Card fullWidth={fullwidth} key={id} card={feature} />
        ))}
      </div>
    </>
  );
};

export default Featured;
