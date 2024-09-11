import React, { HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { navLinks } from '@/store/links';

import SocialLinks from '@/components/social-links';

import { Button } from '@/components/ui/button';
import * as Sheet from '@/components/ui/sheet';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { Menu } from 'lucide-react';
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
      {navLinks.map((navLink) => (
        <Button
          key={'nav-link-' + navLink.label}
          asChild
          variant='link'
          size='link'
        >
          <Link href={navLink.url}>{navLink.label}</Link>
        </Button>
      ))}
    </ul>
  );
};

const MenuToggle = () => {
  return (
    <Sheet.Sheet>
      <Sheet.SheetTrigger className='lg:hidden'>
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
    <header className=' w-full p-5 lg:px-10 '>
      <nav className='flex items-center justify-between'>
        <Logo />

        <NavLinks className='max-lg:hidden' />

        <MenuToggle />
      </nav>
    </header>
  );
}
