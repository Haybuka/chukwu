import Link from 'next/link';
import styles from './socials.module.css';
import AvatarBlob from './blob';

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
          <AvatarBlob />
        </div>
        <div className="flex items-center text-[12px] w-60 justify-evenly">
          {socials.map((social, id) => (
            <Link href={social.link} key={id} className="capitalize">
              {social.name}
            </Link>
          ))}
        </div>
      </aside>
    </footer>
  );
};

export default Socials;
