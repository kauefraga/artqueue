import { ArrowRight } from 'lucide-react';

export function PendingCommissionsNav() {
  return (
    <nav>
      <a href="/finished" className="flex transition-all gap-2 hover:gap-3">
        Comissões concluídas
        <ArrowRight />
      </a>
    </nav>
  );
}
