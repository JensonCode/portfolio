import { navLinks } from '@/store/nav';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Nav() {
  return <Topbar />;
}

const Logo = () => {
  return (
    <Image
      src='/j.svg'
      alt='Jenson Li Portfolio Logo'
      className='dark:invert'
      width={60}
      height={60}
      priority
    />
  );
};

const Links = () => {
  return (
    <ol className='flex font-medium space-x-5'>
      {navLinks.map((navLink, index) => (
        <li
          key={'nav-link-' + index}
          className='text-foreground hover:text-foreground/80'
        >
          <Link href={navLink.url}>{navLink.name}</Link>
        </li>
      ))}
    </ol>
  );
};

const Topbar = () => {
  return (
    <header className=' w-full p-5 px-10 '>
      <nav className='flex items-center justify-between'>
        <Logo />
        <Links />
      </nav>
    </header>
  );
};
