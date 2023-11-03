'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cls from 'classnames';

import styles from './navigation.module.css';
import { Inter } from 'next/font/google';
import { navigation } from '@/utils/content';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

const Navigation = () => {
  const pathname = usePathname();

  return (
    <header className="w-1/2 hidden lg:block">
      <nav className={inter.className}>
        {navigation.map((navigate, id) => {
          return (
            <Link
              key={id}
              href={navigate.link}
              className={cls(
                styles.link,
                ` ${
                  pathname.toLowerCase() === navigate.link.toLowerCase() &&
                  styles.active_link
                }`
              )}
            >
              <span>0{id}</span>
              <span className={styles.divider}></span>
              <span>{navigate.name}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Navigation;
