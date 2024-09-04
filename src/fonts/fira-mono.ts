import { Fira_Mono } from 'next/font/google';

const FiraMono = Fira_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const FontStyles = FiraMono.className;
