import { paymentStatusToText, stageToText, type Commission } from '../../schemas/commission';

interface CommissionItemProps {
  commission: Commission;
  finishCommission: (id: number) => void;
}

export function CommissionItem({ commission, finishCommission }: CommissionItemProps) {
  const handleFinishCommission = () => {
    finishCommission(commission.id);
  };

  const paymentStatus = paymentStatusToText[commission.paymentStatus];
  const stage = stageToText[commission.stage];

  return (
    <li className="flex grow items-center gap-5 border border-b-2 border-e-2 rounded-lg hover:rounded-none group">
      <div className="flex flex-col grow px-5 overflow-hidden">
        <p>
          {commission.name}
          {' '}
          {commission.twitter ? `(@${commission.twitter})` : ''}
        </p>
        <p className="text-black/50 dark:text-white/60">{stage}</p>
      </div>

      <p>{paymentStatus}</p>

      <p className="p-5 group-hover:hidden">
        R$
        {commission.price.toLocaleString('pt-br')}
      </p>

      <button
        onClick={handleFinishCommission}
        className="hidden group-hover:flex items-center h-full p-5 cursor-pointer bg-[#9ACD32]"
      >
        terminou?
      </button>
    </li>
  );
}
