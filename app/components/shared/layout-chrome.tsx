'use client';

import { Analytics } from '@vercel/analytics/next';
import { Footer } from '../footer/footer';
import { Header } from './header';
import { usePathname } from 'next/navigation';

type LayoutChromeProps = {
  children: React.ReactNode;
};

export function LayoutChrome({ children }: LayoutChromeProps) {
  const pathname = usePathname();
  const hideChrome =
    pathname.startsWith('/blog/blog-bfshop') ||
    pathname === '/blog/blog-bfshop-1' ||
    pathname === '/blog/blog-bfshop-2';

  return (
    <>
      {!hideChrome ? <Header /> : null}
      {children}
      {!hideChrome ? <Footer /> : null}
      <Analytics />
    </>
  );
}
