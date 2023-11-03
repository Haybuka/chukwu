import './globals.css';
import { Poppins } from 'next/font/google';
import cls from 'classnames';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cls(poppins.className, 'bg-portfolio-200')}>
        {children}
      </body>
    </html>
  );
}
