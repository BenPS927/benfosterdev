import type { ReactNode } from 'react';
import Link from 'next/link';

type BackPillLinkProps = {
  href: string;
  label?: string;
  children?: ReactNode;
};

export function BackPillLink({ href, label = 'Back', children }: BackPillLinkProps) {
  return (
    <Link
      href={href}
      className="accent-electric-blue hover-accent-electric-blue-border inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium transition hover:bg-zinc-800"
    >
      {children ?? label}
    </Link>
  );
}