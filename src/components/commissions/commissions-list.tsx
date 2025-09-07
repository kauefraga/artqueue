import type { Commission } from '../../schemas/commission';
import { CommissionItem } from './commission-item';

interface CommissionsListProps {
  commissions: Commission[];
}

export function CommissionsList({ commissions }: CommissionsListProps) {
  return (
    <ul className="w-full flex flex-col gap-3">
      {
        commissions.map(c => (
          <CommissionItem key={c.id} commission={c} />
        ))
      }
    </ul>
  );
}
