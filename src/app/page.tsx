import dynamic from 'next/dynamic';
const Scene = dynamic(() => import('@/components/scene'), { ssr: false });

export default function HomePage() {
  return (
    <Scene>
      <main>
        <section
          id='landing'
          className='font-bold text-6xl py-[20%] px-[5%] flex flex-col space-y-2 drop-shadow'
        >
          <p>Hi,</p>
          <p>I&apos;m Jenson</p>
          <p className='md:text-nowrap'>Web Developer</p>
        </section>

        <section
          id='about'
          className='font-bold text-6xl py-[20%] px-[5%] flex flex-col space-y-2 drop-shadow'
        >
          about
        </section>
        <section
          id='projects'
          className='font-bold text-6xl py-[20%] px-[5%] flex flex-col space-y-2 drop-shadow'
        >
          projects
        </section>
        <section
          id='contact'
          className='font-bold text-6xl py-[20%] px-[5%] flex flex-col space-y-2 drop-shadow'
        >
          contact
        </section>
      </main>
    </Scene>
  );
}
