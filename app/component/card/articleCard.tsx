import cls from 'classnames';
import styles from './card.module.css';
import Link from 'next/link';
import { Inter, Titillium_Web } from 'next/font/google';
import IconType from '../icon/iconType';

type ArticleCardProp = {
  card: CardUi;
  fullWidth: boolean;
};

const titilium = Titillium_Web({ subsets: ['latin'], weight: '600' });
const inter = Inter({ subsets: ['latin'], weight: ['500', '700'] });

const ArticleCard = ({ card }: ArticleCardProp) => {
  return (
    <aside className={cls(styles.card, styles.grid_article_card)}>
      <div className="w-full">
        <h4
          className={cls(
            inter.className,
            'text-white text-[0.7rem] font-semibold uppercase'
          )}
        >
          {card.name}
        </h4>
        <p
          className={cls(
            inter.className,
            'text-portfolio-400 text-[0.65rem] capitalize my-2'
          )}
        >
          {card.stack}
        </p>
      </div>
      <div>
        <p className={cls(styles.article_description, titilium.className)}>
          {card.description}
        </p>
        <aside className="flex items-center gap-x-2">
          {card.links.map((link, id) => (
            <Link
              key={id}
              href={link.path}
              className={cls(
                inter.className,
                ' text-portfolio-400 my-3 text-sm text-[0.65rem] flex items-center'
              )}
              target="_blank"
            >
              <span>
                <IconType icon={link.icon} />
              </span>
              <span className="mx-2 inline-block">{link.label}</span>
            </Link>
          ))}
        </aside>
      </div>
    </aside>
  );
};

export default ArticleCard;
