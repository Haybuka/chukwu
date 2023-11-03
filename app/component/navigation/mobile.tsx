'use client';
import React, { useState } from 'react';
import cls from 'classnames';
import styles from './navigation.module.css';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

const MobileNavigation = () => {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  const handleVisibility = () => {
    setVisible((prev) => !prev);
  };
  return (
    <header
      className={cls(
        !visible
          ? `sticky transition-all top-0 z-10  w-screen shadow-lg lg:hidden py-4 px-4 flex justify-end text-white  bg-portfolio-300 `
          : `py-6 sticky transition-all top-0 z-20  w-screen shadow-lg lg:hidden px-4 flex justify-end text-white  bg-portfolio-300`
      )}
    >
      <nav
        className="flex justify-end flex-col items-end p-1 "
        onClick={handleVisibility}
      >
        <span
          className={cls(styles.line_one, visible && styles.line_one_cross)}
        ></span>
        <span
          className={cls(styles.line_two, visible && styles.line_two_cross)}
        ></span>
      </nav>

      <section
        className={cls(
          `absolute top-16 h-screen bg-portfolio-300 w-full left-0 text-center py-6 flex flex-col items-center -translate-x-[100vw] transition-all duration-300`,
          visible && `translate-x-0`
        )}
      >
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
      </section>
    </header>
  );
};

export default MobileNavigation;
