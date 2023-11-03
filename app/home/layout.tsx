import '../globals.css';
import { Poppins } from 'next/font/google';
import cls from 'classnames';

import styles from '../layout.module.css';
import LeftUi from '../component/leftUi';
import MobileNavigation from '../component/navigation/mobile';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className={cls(
        poppins.className,
        'bg-portfolio-200',
        'lg:flex min-h-screen items-start justify-between md:pb-6 lg:px-12 xl:px-20'
      )}
    >
      <MobileNavigation />
      <LeftUi />

      <section className={cls(styles.home, ' lg:px-0')}>{children}</section>
    </main>
  );
}
