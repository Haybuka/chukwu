import React from 'react';
import Featured from '../component/featured';
import { articles } from '@/utils/content';

const Articles = () => {
  return (
    <div className="pt-8 px-6">
      <Featured
        details={articles}
        fullwidth={false}
        title="Others"
        page="article"
      />
    </div>
  );
};

export default Articles;
