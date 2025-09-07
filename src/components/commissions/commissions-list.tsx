import type { Commission } from '../../schemas/commission';
import { CommissionItem } from './commission-item';

interface CommissionsListProps {
  commissions: Commission[];
  finishCommissionHandler: (id: number) => void;
}

export function CommissionsList({ commissions, finishCommissionHandler }: CommissionsListProps) {
  return (
    <ul className="w-full flex flex-col gap-3">
      {
        commissions.map(c => (
          <CommissionItem key={c.id} commission={c} finishCommission={finishCommissionHandler} />
        ))
      }
    </ul>
  );
}
