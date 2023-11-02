import Featured from './component/featured';

const featured = [
  {
    name: 'Doravet',
    description:
      'An E-voting blockchain application, presented for a web 3 hackathon',
    stack: 'Next JS + Web 3',
    link: 'https://doravet-lake.vercel.app/',
  },
  {
    name: 'Radsync',
    description:
      'A medical website for test diagnosis, Test Report Process with Certified Radiologists',
    stack: 'Next Js + Typescript',
    link: 'https://radsync.online/',
  },
  {
    name: 'Power Works',
    description:
      'A business platform for an electrical based company with highlights on services rendered',
    stack: 'React + HeadlessUi + Tailwind',
    link: 'https://radsync.online/',
  },
];

const others = [
  {
    name: 'DTH ALT',
    description: 'Responsive Ecommerce web page',
    stack: 'Javascript + Slick slider',
    link: 'https://dthalt.netlify.app/',
  },
  {
    name: 'Pokemon',
    description: 'Pokemon cards display website, with stat and details',
    stack: 'React + React Query',
    link: 'https://pok3mon.netlify.app/',
  },
  {
    name: 'Rock Paper Scissors',
    description: 'Responsive Rock Paper Scissors game with score keeper.',
    stack: 'Html + Css + Javascript',
    link: 'https://rockpapsciss.netlify.app/',
  },
  {
    name: ' Card UI',
    description: 'Credit card UI build with validation',
    stack: 'Typescript + Formik + TailwindCss',
    link: 'https://cardts.netlify.app/',
  },
  {
    name: 'Musix Match Clone',
    description: '',
    stack: 'React + Swiper',
    link: 'https://musixmatch.netlify.app/',
  },
  {
    name: 'Gringofolio',
    description: 'Portfolio website for a photographer.',
    stack: ' Gsap  + Magnific Popup',
    link: 'https://gringofolio.netlify.app/',
  },
];
export default function Home() {
  return (
    <article className="px-6">
      <Featured featured={featured} fullwidth={true} title="Featured" />
      <div className="pt-8 ">
        <Featured featured={others} fullwidth={false} title="Others" />
      </div>
    </article>
  );
}
