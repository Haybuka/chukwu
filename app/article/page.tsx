import React from 'react';
import Featured from '../component/featured';

const articles = [
  {
    name: 'Yaargs!!',
    description: 'Command Line Notes App & Parsing using NodeJS and Yargs.',
    stack: 'October 22, 2022',
    links: [
      {
        label: '9 min read',
        path: 'https://chukwu.hashnode.dev/command-line-notes-app-parsing-using-nodejs-and-yargs',
        icon: 'clock',
      },
    ],
  },
  {
    name: 'Life cycle methods',
    description:
      'A quick glance at some of react life cycle method and how they intersect.',
    stack: 'May 31, 2022',
    links: [
      {
        label: '4 min read',
        path: 'https://chukwu.hashnode.dev/react-lifecycle-method',
        icon: 'clock',
      },
    ],
  },
];

const Articles = () => {
  return (
    <div className="pt-8 md:px-6">
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
