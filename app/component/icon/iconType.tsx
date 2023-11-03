import React from 'react';
import EyeIcon from './eye';
import ClockIcon from './clock';
import CodeIcon from './code';
import GithubIcon from './github';
import Email from '../socials/email';
import TwitterIcon from '../socials/twitter';

type PageTypeProp = {
  icon: string;
  size?: number | undefined;
};

const IconType = ({ icon, size }: PageTypeProp) => {
  switch (icon.toLowerCase()) {
    case 'eye':
      return <EyeIcon size={size} />;
    case 'link':
      return '';
    case 'clock':
      return <ClockIcon size={size} />;
    case 'code':
      return <CodeIcon size={size} />;
    case 'github':
      return <GithubIcon size={size} />;
    case 'mail':
      return <Email size={size} />;
    case 'twitter':
      return <TwitterIcon size={size} />;
    default:
      break;
  }
};

export default IconType;
