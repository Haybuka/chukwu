'use client';
import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';

export default function Home() {
  const router = useRouter();
  useLayoutEffect(() => {
    router.push('/home');
  }, [router]);
  return <article className="xl:px-6"></article>;
}
