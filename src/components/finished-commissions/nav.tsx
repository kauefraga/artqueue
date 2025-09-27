import { ArrowRight } from 'lucide-react';

export function FinishedCommissionsNav() {
  return (
    <nav>
      <a href="/" className="flex transition-all gap-2 hover:gap-3">
        Comissões pendentes
        <ArrowRight />
      </a>
    </nav>
  );
}
