import React from 'react';

const technologies = [
  'Node.js',
  'Go',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
];

export default function About() {
  return (
    <section id='about'>
      <h2>About Me</h2>

      <p>
        Hello, I&apos;m Jenson Li, a Web Developer based in Toronto. I love
        building applications that solve real-world problems. My journey in tech
        began in 2022 when I decided to pursue a new career path by enrolling in
        a Computer Programming diploma program.
      </p>

      <p>
        Since then, I have successfully completed two freelance projects, using
        technology to help clients address their business needs. Currently, I am
        working on a&nbsp;
        <a
          target='_blank'
          href='https://booga.com.hk/'
          className='bg-white/60 hover:bg-white/30'
        >
          start-up
        </a>
        , where I apply my knowledge to deliver innovative solutions.
      </p>

      <p>
        I am actively seeking a full-time developer position to further apply my
        skills and continue growing in the tech industry.
      </p>

      <div className='bg-primary/70 text-primary-foreground p-2 rounded-md'>
        <h3>Technologies I Work With:</h3>

        <ul className='font-medium text-base md:text-lg grid grid-cols-2'>
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
