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
            'block capitalize font-bold my-2 text-[2.4rem] xl:text-6xl'
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
        className={cls(titilium.className, ' text-portfolio-100 my-4 block')}
      >
        <p className="lg:leading-8 text-sm">
          I create interactive{' '}
          <span className=" text-white capitalize">
            web and mobile experiences
          </span>{' '}
          using frontend technologies that solve real world problems.
        </p>
        <p className="lg:leading-8 text-sm my-2">
          <span className="text-white">Collaboration</span> is a key part of my
          approach. Whether it&apos;s building robust applications, optimizing
          existing systems, or tackling complex problems.
        </p>
        <p className="lg:leading-8 text-sm my-2">
          In my free time i window shop online for dslr&apos;s (i do have a
          thing for{' '}
          <span className="text-white capitalize  inline-block">
            photography
          </span>
          ), strum through a few{' '}
          <span className="text-white capitalize  inline-block">guitar</span>{' '}
          chords and{' '}
          <span className="text-white capitalize  inline-block">
            connect with family{' '}
          </span>
        </p>
      </div>
    </article>
  );
};

export default Banner;
