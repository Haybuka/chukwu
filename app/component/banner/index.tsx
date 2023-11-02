import { Titillium_Web, Inter } from 'next/font/google';
import cls from 'classnames';

const titilium = Titillium_Web({ subsets: ['latin'], weight: '600' });
const inter = Inter({ subsets: ['latin'], weight: '800' });
const Banner = () => {
  return (
    <article>
      <h3 className="">
        <span
          className={cls(
            inter.className,
            'block capitalize font-bold my-2 text-5xl xl:text-6xl'
          )}
        >
          Chukwu Paschal.
        </span>
        <span
          className={cls(
            inter.className,
            'block capitalize font-semibold my-2 md:my-4 text-lg md:text-xl'
          )}
        >
          Frontend And React Native Engineer.
        </span>
      </h3>
      <div
        className={cls(
          titilium.className,
          ' text-portfolio-100 my-4 hidden lg:block'
        )}
      >
        <p className="lg:leading-8 text-sm">
          Im a <span className="text-white">software engineer</span>. I create{' '}
          <span className="text-white">interactive</span> web
        </p>
        <p className=" leading-8 text-sm">
          experiences using frontend technology. I am interested in{' '}
          <span className="text-white">user experience</span>,
        </p>
        <p className=" leading-8 text-sm">
          accessibility, design systems, gaming, web3 and web animations.
        </p>
      </div>
      <div className=" text-portfolio-100 my-4 block lg:hidden">
        <p className="leading-8 text-sm">
          Im a{' '}
          <span className="text-white capitalize underline">
            software engineer
          </span>
          . I create{' '}
          <span className="text-white capitalize underline">interactive</span>{' '}
          web experiences using frontend technology. I am interested in
          <span className="text-white capitalize underline">
            {' '}
            user experience
          </span>
          , accessibility, design systems, gaming, web3 and web animations.
        </p>
      </div>
    </article>
  );
};

export default Banner;
