import type { Metric } from '../../hooks/use-commissions-metrics';
import { CommissionMetric } from './commission-metric';

interface CommissionsReportProps {
  metrics: Metric[];
}

export function CommissionsReport({ metrics }: CommissionsReportProps) {
  return (
    <div className="w-full flex gap-5 justify-between flex-wrap">
      {metrics.map(m => (
        <CommissionMetric key={m.title} title={m.title} value={m.value} />
      ))}
    </div>
  );
}
