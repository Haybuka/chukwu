import React from 'react';
import EyeIcon from './eye';
import ClockIcon from './clock';
import CodeIcon from './code';

type PageTypeProp = {
  icon: string;
};

const IconType = ({ icon }: PageTypeProp) => {
  switch (icon) {
    case 'eye':
      return <EyeIcon />;
    case 'link':
      return '';
    case 'clock':
      return <ClockIcon />;
    case 'code':
      return <CodeIcon />;
    default:
      break;
  }
};

export default IconType;
