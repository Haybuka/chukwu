import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import cls from 'classnames';
import Navigation from './component/navigation';
import Banner from './component/banner';
import Socials from './component/socials';

import styles from './layout.module.css';
import Link from 'next/link';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Ndulue Paschal',
  description: 'Portfolio site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cls(poppins.className, 'bg-portfolio-200')}>
        <main className="lg:flex min-h-screen items-start justify-between  lg:px-12 xl:px-20">
          <header className="sticky transition-all top-0  w-screen shadow-lg lg:hidden py-6 px-4 flex justify-end text-white  bg-portfolio-300 ">
            <nav className="flex justify-end flex-col items-end">
              <span className="w-10 h-[1px] bg-white block my-1"></span>
              <span className="w-8 h-[1px] bg-white block my-1"></span>
            </nav>
          </header>
          <section className="lg:h-screen lg:w-1/2 py-10 md:py-9 lg:py-20 px-6 flex justify-between items-start flex-col text-white">
            <Banner />
            <Navigation />
            <Socials />
          </section>

          <section className={cls(styles.home, ' lg:px-0')}>{children}</section>
          <footer className={cls('lg:hidden  px-6 mb-6')}>
            <section className="flex items-center gap-x-4 text-white justify-between">
              <Link
                href={'/'}
                className="py-3 px-4 bg-portfolio-300 w-1/2 rounded-md text-center"
              >
                Home
              </Link>
              <Link
                href={'/article'}
                className="py-3 px-4 bg-portfolio-300 w-1/2 rounded-md text-center"
              >
                Articles
              </Link>
            </section>
          </footer>
        </main>
      </body>
    </html>
  );
}
