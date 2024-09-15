import dynamic from 'next/dynamic';
const Scene = dynamic(() => import('@/components/three/scene'), { ssr: false });

import About from '@/components/sections/about';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';

export default function HomePage() {
  return (
    <Scene>
      <main>
        <section
          id='landing'
          className='py-[20%]'
        >
          <h1>Hi,</h1>
          <h2>I&apos;m Jenson Li</h2>
          <h2 className='md:text-nowrap'>Web Developer</h2>
        </section>

        <About />

        <Projects />

        <Contact />
      </main>
    </Scene>
  );
}
