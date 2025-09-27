import { type AnchorHTMLAttributes, type ReactNode } from 'react';

interface FooterLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export function FooterLink({ children, ...props }: FooterLink) {
  return (
    <a
      target="_blank"
      className="flex gap-3 px-5 py-2 border-2 rounded-lg border-zinc-950 hover:border-2 hover:border-amber-400 active:border-dashed"
      {...props}
    >
      {children}
    </a>
  );
}
