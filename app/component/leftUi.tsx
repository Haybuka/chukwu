'use client';
import { usePathname } from 'next/navigation';

import cls from 'classnames';
import Banner from './banner';
import Navigation from './navigation';
import Socials from './socials';

const LeftUi = () => {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <section
      className={cls(
        `lg:h-screen lg:w-1/2 py-10 md:py-9 lg:py-20 px-6 flex justify-between items-start flex-col text-white `,
        pathname === '/article' && `hidden lg:flex `
      )}
    >
      <Banner />
      <Navigation />
      <Socials />
    </section>
  );
};

export default LeftUi;
