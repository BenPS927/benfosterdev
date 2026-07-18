'use client';

import { Analytics } from '@vercel/analytics/next';
import { Footer } from '../footer/footer';
import { Header } from './header';

type LayoutChromeProps = {
  children: React.ReactNode;
};

export function LayoutChrome({ children }: LayoutChromeProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Analytics />
    </>
  );
}
