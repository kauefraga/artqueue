import { QueueCleaner } from '../queue-cleaner';

interface FinishedCommissionsActionsProps {
  onClearCommissions: () => void;
}

export function FinishedCommissionsActions({ onClearCommissions }: FinishedCommissionsActionsProps) {
  return (
    <>
      <QueueCleaner type="finished" onClear={onClearCommissions} />
    </>
  );
}
