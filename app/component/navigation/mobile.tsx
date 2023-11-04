'use client';
import React, { useState } from 'react';
import cls from 'classnames';
import styles from './navigation.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import IconType from '../icon/iconType';
import { navigation, socials } from '@/utils/content';

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
        <aside className="w-[40%]">
          <p className="my-6">Connect With Me</p>
          <div className="flex items-center justify-between ">
            {socials.map((social, id) => (
              <Link key={id} href={social.link} target="_blank">
                <IconType icon={social.icon} size={5} />
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </header>
  );
};

export default MobileNavigation;
