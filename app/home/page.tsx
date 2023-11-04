import { featured, others } from '@/utils/content';
import ViewObserver from '../component/observer';
import Link from 'next/link';

export default function Home() {
  return (
    <article className="xl:px-6">
      <ViewObserver featured={featured} title="Projects" fullWidth={true} />
      <ViewObserver featured={others} title="Others" fullWidth={false} />
      <p className="text-center my-4 text-white text-[0.7rem] md:translate-y-10">
        <span className=" text-portfolio-100">Inspired by </span>
        <Link href={'https://www.sarahdayan.dev/'}>Sarah Dayan</Link>
        <span className=" text-portfolio-100"> and </span>

        <Link href={'https://kadet.dev/'}>Kadet</Link>
      </p>
    </article>
  );
}
