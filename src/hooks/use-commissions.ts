import { useState } from 'react';
import z from 'zod';
import { CommissionSchema, type Commission } from '../schemas/commission';

const CommissionsSchema = z.array(CommissionSchema);

function parseCommissions(json: string | null) {
  if (json) {
    const { success, data, error } = CommissionsSchema.safeParse(JSON.parse(json));

    if (success) {
      return data;
    }

    console.error(error);
  }

  return [];
}

export function useCommissions() {
  const json = localStorage.getItem('commissions');

  const [commissions, setCommissions] = useState(
    () => parseCommissions(json),
  );

  const pushCommission = (commission: Commission) => {
    const updatedCommissions = [...commissions, commission];

    setCommissions(updatedCommissions);
    localStorage.setItem('commissions', JSON.stringify(updatedCommissions));
  };

  const finishCommission = (id: number) => {
    const commission = commissions[id - 1];

    const updatedCommissions: Commission[] = [
      ...commissions.filter(c => c.id !== id),
      { ...commission, stage: 'finished' },
    ];

    setCommissions(updatedCommissions);
    localStorage.setItem('commissions', JSON.stringify(updatedCommissions));
  };

  return {
    commissions,
    pushCommission,
    finishCommission,
  };
}
