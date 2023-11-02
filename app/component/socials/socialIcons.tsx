// import Email from "@/app/socials/email";

import Email from './email';

const SocialIcon = (icon: string) => {
  switch (icon.toLowerCase()) {
    case 'mail':
      return <Email />;

    default:
      break;
  }
};

export default SocialIcon;
