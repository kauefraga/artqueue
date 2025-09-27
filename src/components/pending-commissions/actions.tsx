import { QueueCleaner } from '../queue-cleaner';

interface PendingCommissionsActionsProps {
  onClearCommissions: () => void;
}

export function PendingCommissionsActions({ onClearCommissions }: PendingCommissionsActionsProps) {
  return (
    <>
      <QueueCleaner type="pending" onClear={onClearCommissions} />
    </>
  );
}
