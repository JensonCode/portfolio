import React, { HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/store/nav';

import * as Sheet from '@/components/ui/sheet';

import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

export default function Nav() {
  return (
    <header className=' w-full p-5 lg:px-10 '>
      <nav className='flex items-center justify-between'>
        <Logo />
        <Links className='max-lg:hidden' />
        <MenuToggle />
      </nav>
    </header>
  );
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

const Links = ({ className, ...props }: HTMLAttributes<HTMLOListElement>) => {
  return (
    <ol
      className={cn('flex font-medium gap-5', className)}
      {...props}
    >
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

const MenuToggle = () => {
  return (
    <Sheet.Sheet>
      <Sheet.SheetTrigger className='lg:hidden'>
        <Menu
          size={35}
          className='text-secondary'
        />
      </Sheet.SheetTrigger>
      <Sheet.SheetContent className='border-0'>
        <Sheet.SheetHeader>
          <VisuallyHidden>
            <Sheet.SheetTitle>Menu</Sheet.SheetTitle>
            <Sheet.SheetDescription>Nav Menu</Sheet.SheetDescription>
          </VisuallyHidden>
        </Sheet.SheetHeader>
        <nav className='my-[25%] mx-[10%]'>
          <Links className='flex flex-col gap-7' />
        </nav>
      </Sheet.SheetContent>
    </Sheet.Sheet>
  );
};
