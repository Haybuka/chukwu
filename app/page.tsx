import Featured from './component/featured';

const featured = [
  {
    name: 'Doravet',
    description:
      'An E-voting blockchain application, presented for a web 3 hackathon',
    stack: 'Next JS + Rainbow Kit',
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
    name: ' Card UI',
    description: 'Credit card UI build with validation',
    stack: 'Typescript + Formik + TailwindCss',
    link: 'https://cardts.netlify.app/',
  },
];

const others = [
  {
    name: ' Card UI',
    description: 'Credit card UI build with validation',
    stack: 'Typescript + Formik + TailwindCss',
    link: 'https://cardts.netlify.app/',
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
