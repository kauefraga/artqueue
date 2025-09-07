import type { Commission } from '../../schemas/commission';

interface CommissionItemProps {
  commission: Commission;
}

export function CommissionItem({ commission }: CommissionItemProps) {
  return (
    <li className="flex grow items-center gap-5 border border-b-2 border-e-2 rounded-lg transition-all hover:rounded-none group">
      <div className="flex flex-col grow px-5">
        <a href={commission.twitter_url} target="_blank" rel="noopener noreferrer">{commission.name}</a>
        <p className="text-black/50">{commission.stage}</p>
      </div>
      <p className="p-5">{commission.paymentStatus}</p>
      <p className="p-5 group-hover:hidden">
        R$
        {commission.price.toFixed(2).replace('.', ',')}
      </p>
      <button className="hidden group-hover:block cursor-pointer bg-emerald-600 p-5">terminou?</button>
    </li>
  );
}
