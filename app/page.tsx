import Featured from './component/featured';

const featured = [
  {
    name: 'Doravet',
    description:
      'An E-voting blockchain application, presented for a web 3 hackathon',
    stack: 'Next JS + Web 3',
    links: [
      {
        label: 'Live',
        path: 'https://doravet-lake.vercel.app/',
        icon: 'eye',
      },
    ],
  },
  {
    name: 'Radsync',
    description:
      'A medical website for test diagnosis, Test Report Process with Certified Radiologists',
    stack: 'Next Js + Typescript',
    links: [
      {
        label: 'Live',
        path: 'https://radsync.online/',
        icon: 'eye',
      },
    ],
  },
  {
    name: 'Power Works',
    description:
      'A business platform for an electrical based company with highlights on services rendered',
    stack: 'React + HeadlessUi + Tailwind',
    links: [
      {
        label: 'Live',
        path: 'https://ivr-haybuka.vercel.app/',
        icon: 'eye',
      },
    ],
  },
];

const others = [
  {
    name: 'DTH ALT',
    description: 'Responsive Ecommerce web page',
    stack: 'Javascript + Slick slider',
    links: [
      {
        label: 'Live',
        path: 'https://dthalt.netlify.app/',
        icon: 'eye',
      },
      {
        label: 'code',
        path: 'https://github.com/Haybuka/DTH-alt',
        icon: 'code',
      },
    ],
  },
  {
    name: 'Pokemon',
    description: 'Pokemon cards display website, with stat and details',
    stack: 'React + React Query',
    links: [
      {
        label: 'Live',
        path: 'https://pok3mon.netlify.app/',
        icon: 'eye',
      },
      {
        label: 'Code',
        path: 'https://github.com/Haybuka/Pokemon',
        icon: 'code',
      },
    ],
  },
  {
    name: 'Rock Paper Scissors',
    description: 'Responsive Rock Paper Scissors game with score keeper.',
    stack: 'Html + Css + Javascript',
    links: [
      {
        label: 'Live',
        path: 'https://rockpapsciss.netlify.app/',
        icon: 'eye',
      },
      {
        label: 'Code',
        path: 'https://github.com/Haybuka/RPSgame',
        icon: 'code',
      },
    ],
  },
  {
    name: ' Card UI',
    description: 'Credit card UI build with validation',
    stack: 'Typescript + Formik + TailwindCss',
    links: [
      {
        label: 'Live',
        path: 'https://cardts.netlify.app/',
        icon: 'eye',
      },
    ],
  },
  {
    name: 'Musix Match Clone',
    description: '',
    stack: 'React + Swiper',
    links: [
      {
        label: 'Live',
        path: 'https://musixmatch.netlify.app/',
        icon: 'eye',
      },
      {
        label: 'Code',
        path: 'https://github.com/Haybuka/Musixmatch_Clone',
        icon: 'code',
      },
    ],
  },
  {
    name: 'Gringofolio',
    description: 'Portfolio website for a photographer.',
    stack: ' Gsap  + Magnific Popup',
    links: [
      {
        label: 'Live',
        path: 'https://gringofolio.netlify.app/',
        icon: 'eye',
      },
      {
        label: 'Code',
        path: 'https://github.com/Haybuka/GringoPhotography',
        icon: 'code',
      },
    ],
  },
];

export default function Home() {
  return (
    <article className="xl:px-6">
      <Featured
        details={featured}
        fullwidth={true}
        title="Featured"
        page="home"
      />
      <div className="pt-8 ">
        <Featured
          details={others}
          fullwidth={false}
          title="Others"
          page="home"
        />
      </div>
    </article>
  );
}
