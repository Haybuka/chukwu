import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import cls from 'classnames';
import Navigation from './navigation';
import Banner from './banner';
import Socials from './socials';

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
        <main className="flex min-h-screen items-center justify-between">
          <section className="h-screen w-1/2 p-14 px-16 flex justify-between items-start flex-col">
            <Banner />
            <Navigation />
            <Socials />
          </section>
          <section className="bg-blue-600 h-full w-1/2 overflow-y-scroll">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
