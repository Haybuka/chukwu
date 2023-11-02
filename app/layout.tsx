import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import cls from 'classnames';
import Navigation from './component/navigation';
import Banner from './component/banner';
import Socials from './component/socials';

const inter = Inter({ subsets: ['latin'] });
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
        <main className="flex min-h-screen items-start justify-between px-20">
          <section className="h-screen w-1/2 py-14  flex justify-between items-start flex-col text-white">
            <Banner />
            <Navigation />
            <Socials />
          </section>
          <section className="h-screen w-1/2 overflow-y-scroll ">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
