import cls from 'classnames';
import styles from './card.module.css';
import Link from 'next/link';
import { Inter, Titillium_Web } from 'next/font/google';
import IconType from '../icon/iconType';

type HomeCardProp = {
  card: CardUi;
  fullWidth: boolean;
};

const titilium = Titillium_Web({ subsets: ['latin'], weight: '600' });
const inter = Inter({ subsets: ['latin'], weight: ['500', '700'] });

const HomeCard = ({ fullWidth, card }: HomeCardProp) => {
  return (
    <aside
      className={cls(styles.card, fullWidth ? 'w-full' : styles.grid_card)}
    >
      <div className="">
        <h4 className={cls(inter.className, 'text-white text-xl capitalize')}>
          {card.name}
        </h4>
        <p
          className={cls(
            inter.className,
            ' text-portfolio-400 text-[0.65rem] uppercase my-2'
          )}
        >
          {card.stack}
        </p>
        <p className={cls(styles.description, titilium.className)}>
          {card.description}
        </p>
      </div>
      <aside className="flex items-center gap-x-2">
        {card.links.map((link, id) => (
          <Link
            key={id}
            href={link.path}
            className={cls(
              inter.className,
              ' text-portfolio-400 my-3 text-sm flex items-center'
            )}
            target="_blank"
          >
            <span>
              <IconType icon={link.icon} />
            </span>
            <span className="inline-block mx-2">{link.label}</span>
          </Link>
        ))}
      </aside>
    </aside>
  );
};

export default HomeCard;
