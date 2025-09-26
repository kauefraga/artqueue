import { useMemo } from 'react';
import type { Commission } from '../schemas/commission';

export type Metric = {
  title: string;
  value: string;
};

function generateMetrics(commissions: Commission[]): Metric[] {
  const pendingCommissions = commissions.filter(c => c.stage !== 'finished').length;
  const completedCommissions = commissions.filter(c => c.stage === 'finished').length;
  let income = 0;
  for (const c of commissions) {
    income += c.price;
  }

  const metrics = [
    { title: 'Comissões pendentes', value: pendingCommissions.toString() },
    { title: 'Comissões concluídas', value: completedCommissions.toString() },
    { title: 'Rendimento', value: `R$${income.toLocaleString('pt-br')}` },
  ];

  return metrics;
}

export function useCommissionsMetrics(commissions: Commission[]) {
  return useMemo(() => generateMetrics(commissions), [commissions]);
}
