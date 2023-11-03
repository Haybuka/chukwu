import { featured, others } from '@/utils/content';
import ViewObserver from '../component/observer';

export default function Home() {
  return (
    <article className="xl:px-6">
      <ViewObserver featured={featured} title="Projects" fullWidth={true} />
      <ViewObserver featured={others} title="Others" fullWidth={false} />
    </article>
  );
}
