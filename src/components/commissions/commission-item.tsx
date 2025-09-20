import type { Commission } from '../../schemas/commission';

interface CommissionItemProps {
  commission: Commission;
  finishCommission: (id: number) => void;
}

export function CommissionItem({ commission, finishCommission }: CommissionItemProps) {
  const handleFinishCommission = () => {
    finishCommission(commission.id);
  };

  return (
    <li className="flex grow items-center gap-5 border border-b-2 border-e-2 rounded-lg transition-all hover:rounded-none group">
      <div className="flex flex-col grow px-5 overflow-hidden">
        <p className="">
          {commission.name}
          {' '}
          {commission.twitter ? `(@${commission.twitter})` : ''}
        </p>
        <p className="text-black/50 dark:text-white/60">{commission.stage}</p>
      </div>

      <p className="p-5">{commission.paymentStatus}</p>

      <p className="p-5 group-hover:hidden">
        R$
        {commission.price.toFixed(2).replace('.', ',')}
      </p>

      <button onClick={handleFinishCommission} className="hidden group-hover:block cursor-pointer bg-emerald-600 p-5">terminou?</button>
    </li>
  );
}
