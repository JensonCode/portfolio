'use client';

import React, { HTMLAttributes, useEffect } from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import SocialLinks from '@/components/social-links';

import { Button } from '@/components/ui/button';
import * as Sheet from '@/components/ui/sheet';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { Menu } from 'lucide-react';

const navLinks = ['About', 'Projects', 'Contact'];

const Logo = () => {
  return (
    <Image
      src='/j.svg'
      alt='Jenson Li Portfolio Logo'
      width={60}
      height={60}
      priority
    />
  );
};

const NavLinks = ({
  className,
  ...props
}: HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul
      className={cn('flex gap-10', className)}
      {...props}
    >
      {navLinks.map((navLink, index) => (
        <Button
          key={'nav-link-' + navLink}
          variant='link'
          size='link'
          onClick={() => {
            const scene = document.getElementById('scene');
            const scrollControl = scene?.children[0].children[1];

            const section = document.getElementById(navLink.toLowerCase())!;

            console.log(section.offsetTop);

            scrollControl?.scrollTo({
              top: section.offsetTop + window.screen.height * 0.2,
              behavior: 'smooth',
            });
          }}
        >
          {navLink}
        </Button>
      ))}
    </ul>
  );
};

const MenuToggle = () => {
  return (
    <Sheet.Sheet>
      <Sheet.SheetTrigger className='md:hidden'>
        <Menu className='size-10 text-icon' />
      </Sheet.SheetTrigger>
      <Sheet.SheetContent className='border-0'>
        <Sheet.SheetHeader>
          <VisuallyHidden>
            <Sheet.SheetTitle>Menu</Sheet.SheetTitle>
            <Sheet.SheetDescription>Nav Menu</Sheet.SheetDescription>
          </VisuallyHidden>
        </Sheet.SheetHeader>

        <nav className='py-[25%] mx-[10%] flex flex-col justify-between h-[100dvh] divide-y-2 divide-secondary-foreground'>
          <NavLinks className='flex-col' />

          <div className='py-10'>
            <SocialLinks />
          </div>
        </nav>
      </Sheet.SheetContent>
    </Sheet.Sheet>
  );
};

export default function Nav() {
  return (
    <nav className='absolute top-0 h-[10vh] flex items-center justify-between w-full py-2 px-5 md:px-10 bg-black/0 z-[10]'>
      <Logo />

      <NavLinks className='max-md:hidden' />

      <MenuToggle />
    </nav>
  );
}
