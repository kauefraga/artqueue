import type { ReactNode } from 'react';
import { ThemeToggle } from '../components/theme-toggle';

interface HeaderProps {
  nav?: ReactNode;
  actions?: ReactNode;
}

export function Header({ nav, actions }: HeaderProps) {
  return (
    <header className="flex flex-col items-center gap-5 justify-between px-8 py-5 md:flex-row md:gap-0">
      <div className="flex flex-col items-center gap-5 md:flex-row md:gap-10">
        <a href="/">
          <h1 className="underline decoration-amber-400 decoration-2 underline-offset-4 font-semibold text-3xl">
            ArtQueue
          </h1>
        </a>

        {nav}
      </div>

      <div className="flex gap-10">
        {actions}
        <ThemeToggle />
      </div>
    </header>
  );
}
