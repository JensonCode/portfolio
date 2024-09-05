import React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { socialLinks } from '@/store/links';

import { Button } from '@/components/ui/button';

export default function SocialLinks({
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className={cn('flex gap-5 justify-around', className)}
      {...props}
    >
      {socialLinks.map((socialLink) => (
        <Button
          key={'social-link-' + socialLink.label}
          asChild
          variant='link'
          size='icon'
        >
          <Link
            href={socialLink.url}
            target='_blank'
          >
            {socialLink.label}
          </Link>
        </Button>
      ))}
    </ul>
  );
}
