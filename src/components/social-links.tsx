import React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

import { Github, Linkedin, Mail } from 'lucide-react';

export const socialLinks = [
  {
    label: <Github />,
    url: 'https://github.com/JensonCode',
  },
  {
    label: <Linkedin />,
    url: '/https://www.linkedin.com/in/jenson-li-dev/',
  },
  {
    label: <Mail />,
    url: 'mailto:lclcodingjj@gmail.com',
  },
];

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
