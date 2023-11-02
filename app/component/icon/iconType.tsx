import React from 'react';
import EyeIcon from './eye';
import ClockIcon from './clock';
import CodeIcon from './code';
import GithubIcon from './github';
import Email from '../socials/email';
import TwitterIcon from '../socials/twitter';

type PageTypeProp = {
  icon: string;
};

const IconType = ({ icon }: PageTypeProp) => {
  switch (icon.toLowerCase()) {
    case 'eye':
      return <EyeIcon />;
    case 'link':
      return '';
    case 'clock':
      return <ClockIcon />;
    case 'code':
      return <CodeIcon />;
    case 'github':
      return <GithubIcon />;
    case 'mail':
      return <Email />;
    case 'twitter':
      return <TwitterIcon />;
    default:
      break;
  }
};

export default IconType;
