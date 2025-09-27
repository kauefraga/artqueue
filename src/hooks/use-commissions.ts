import { type Commission } from '../schemas/commission';
import { useLocalStorage } from './use-localstorage';

export function useCommissions() {
  const [commissions, setCommissions] = useLocalStorage<Commission[]>('commissions', []);

  const pushCommission = (commission: Commission) => {
    const updatedCommissions = [...commissions, commission];
    setCommissions(updatedCommissions);
  };

  const finishCommission = (id: number) => {
    const commission = commissions[id - 1];

    const updatedCommissions: Commission[] = [
      ...commissions.filter(c => c.id !== id),
      { ...commission, stage: 'finished' },
    ];

    setCommissions(updatedCommissions);
  };

  const clearPendingCommissions = () => {
    const updatedCommissions = [...commissions.filter(c => c.stage === 'finished')];

    setCommissions(updatedCommissions);
  };

  const clearFinishedCommissions = () => {
    const updatedCommissions = [...commissions.filter(c => c.stage !== 'finished')];

    setCommissions(updatedCommissions);
  };

  return {
    commissions,
    pushCommission,
    finishCommission,
    clearPendingCommissions,
    clearFinishedCommissions,
  };
}
