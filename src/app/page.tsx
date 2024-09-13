import { Fragment, HTMLAttributes } from 'react';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/scene'), { ssr: false });

const HomeSection = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <section
      className='min-h-screen w-full'
      {...props}
    />
  );
};

export default function HomePage() {
  return (
    <Scene>
      <main className='mt-20'>
        <section>Landing</section>
        <section>About</section>
        <section>Experience</section>
        <section>Projects</section>
        <section>Contact</section>
      </main>
    </Scene>
  );
}
