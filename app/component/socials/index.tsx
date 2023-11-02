import Link from 'next/link';
import styles from './socials.module.css';
import AvatarBlob from './blob';
import Image from 'next/image';
import SocialIcon from './socialIcons';

const socials = [
  {
    name: 'github',
    icon: 'git',
    link: '',
  },
  {
    name: 'twitter',
    icon: 'tw',
    link: '',
  },
  {
    name: 'email',
    icon: 'mail',
    link: '',
  },
];
const Socials = () => {
  return (
    <footer>
      <aside className="flex items-center ">
        <div className={styles.avatar}>
          {/* <Image width={60} height={60} alt="" src={'/avatar.jpg'} /> */}
          {/* <AvatarBlob /> */}
        </div>
        <div className="flex items-center text-[12px] justify-evenly">
          {socials.map((social, id) => (
            <Link
              href={social.link}
              key={id}
              className="capitalize flex items-center mx-2"
            >
              {SocialIcon(social.icon)}
              <span>{social.name}</span>
              <span className=" rotate-45 inline-block text-portfolio-100 mx-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </aside>
    </footer>
  );
};

export default Socials;
