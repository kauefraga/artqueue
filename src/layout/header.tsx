import { ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router';
import { QueueCleaner } from '../components/queue-cleaner';
import { ThemeToggle } from '../components/theme-toggle';

interface HeaderProps {
  onCleanFinishedCommissions: () => void;
  onCleanPendingCommissions: () => void;
}

export function Header({ onCleanPendingCommissions, onCleanFinishedCommissions }: HeaderProps) {
  const location = useLocation();
  const isFinishedCommissionsPage = location.pathname === '/finished';

  return (
    <header className="flex flex-col items-center gap-5 justify-between px-8 py-5 md:flex-row md:gap-0">
      <div className="flex flex-col items-center gap-5 md:flex-row md:gap-7">
        <a href="/">
          <h1 className="underline decoration-amber-400 decoration-2 underline-offset-4 font-semibold text-3xl">
            ArtQueue
          </h1>
        </a>

        {isFinishedCommissionsPage
          ? (
              <a href="/" className="flex gap-3">
                Ver comissões pendentes
                <ArrowRight />
              </a>
            )
          : (
              <a href="/finished" className="flex gap-3">
                Ver comissões concluídas
                <ArrowRight />
              </a>
            )}
      </div>

      <div className="flex gap-10">
        {isFinishedCommissionsPage
          ? <QueueCleaner type="finished" onClean={onCleanFinishedCommissions} />
          : <QueueCleaner type="pending" onClean={onCleanPendingCommissions} />}
        <ThemeToggle />
      </div>
    </header>
  );
}
