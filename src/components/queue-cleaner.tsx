import { Trash2 } from 'lucide-react';

interface QueueCleanerProps {
  /** cleaner should clean pending or finished commissions */
  type: 'pending' | 'finished';
  onClean: () => void;
}

export function QueueCleaner({ type, onClean }: QueueCleanerProps) {
  if (type === 'pending') {
    return (
      <button
        title="Remove todas encomendas pendentes"
        onClick={onClean}
        className="flex gap-3 hover:cursor-pointer"
      >
        <Trash2 />
        Limpar fila
      </button>
    );
  }

  return (
    <button
      title="Remove todas encomendas finalizadas"
      onClick={onClean}
      className="flex gap-3 hover:cursor-pointer"
    >
      <Trash2 />
      Limpar fila
    </button>
  );
}
