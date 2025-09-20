import { ThemeToggle } from '../components/theme-toggle';

export function HeaderForm() {
  return (
    <header className="flex flex-col items-center gap-5 justify-between px-8 py-5 md:flex-row md:gap-0">
      <div className="flex flex-col items-center gap-5 md:flex-row md:gap-7">
        <a href="/">
          <h1 className="underline decoration-amber-400 decoration-2 underline-offset-4 font-semibold text-3xl">
            ArtQueue
          </h1>
        </a>
      </div>

      <div className="flex gap-10">
        <ThemeToggle />
      </div>
    </header>
  );
}
