import Link from 'next/link';

import IconType from '../icon/iconType';
import { socials } from '@/utils/content';

const Socials = () => {
  return (
    <footer className="">
      <aside className="flex items-center  relative">
        <div className="flex items-center text-[12px] justify-evenly">
          {socials.map((social, id) => (
            <Link
              href={social.link}
              key={id}
              className="capitalize flex items-center mx-2"
              target="_blank"
            >
              <IconType icon={social.icon} />
              <span className="">{social.name}</span>
              <span className=" rotate-45 inline-block text-portfolio-100 mx-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </aside>
    </footer>
  );
};

export default Socials;
