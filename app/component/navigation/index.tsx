'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cls from 'classnames';

import styles from './navigation.module.css';
import { Inter, Titillium_Web } from 'next/font/google';

const navigation = [
  { name: 'work', path: '/' },
  { name: 'article', path: 'article' },
  { name: 'linked In', path: '/linked' },
];

const titilium = Titillium_Web({ subsets: ['latin'], weight: '600' });
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

const Navigation = () => {
  const pathname = usePathname();

  return (
    <header className="w-1/2 hidden lg:block">
      <nav className={inter.className}>
        <Link
          href={'/'}
          className={cls(
            styles.link,
            ` ${pathname === '/' && styles.active_link}`
          )}
        >
          <span>00</span>
          <span className={styles.divider}></span>
          <span>Work</span>
        </Link>
        <Link
          href={'/article'}
          className={cls(
            styles.link,
            ` ${pathname === '/article' && styles.active_link}`
          )}
        >
          <span>01</span>
          <span className={styles.divider}></span>
          <span>Article</span>
        </Link>
        <Link
          href={'https://linkedin.com/in/paschal-ndulue-336980134'}
          className={cls(
            styles.link,
            ` ${pathname === '' && styles.active_link}`
          )}
        >
          <span>02</span>
          <span className={styles.divider}></span>
          <span>Linked In</span>
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;
