import { CommissionsContainer } from '../components/commissions/commissions-container';
import { CommissionsList } from '../components/commissions/commissions-list';
import { CommissionsReport } from '../components/commissions/commissions-report';
import { useCommissions } from '../hooks/use-commissions';
import { Footer } from '../layout/footer';
import { Header } from '../layout/header';
import type { Commission } from '../schemas/commission';

function generateMetrics(commissions: Commission[]) {
  const pendingCommissions = commissions.filter(c => c.stage !== 'finalizada').length;
  const completedCommissions = commissions.filter(c => c.stage === 'finalizada').length;
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

export default function Home() {
  const { commissions, pushCommission, finishCommission } = useCommissions();

  const metrics = generateMetrics(commissions);
  const pendingCommissions = commissions.filter(c => c.stage !== 'finalizada');

  const handleAddCommission = () => {
    pushCommission({ id: commissions.length + 1, name: 'Kauê', price: 13.77, paymentStatus: 'não pagou', createdAt: new Date(), stage: 'esboço' });
  };

  return (
    <>
      <Header />

      <CommissionsContainer>
        <div className="flex flex-col gap-1 text-center">
          <p>Fila de comissões</p>
          <h3 className="text-xl font-medium">Qual é a sua próxima encomenda?</h3>
        </div>

        <CommissionsReport metrics={metrics} />

        <CommissionsList commissions={pendingCommissions} finishCommissionHandler={finishCommission} />

        <button onClick={handleAddCommission} className="border-1 rounded-lg w-full p-2 border-b-2 border-e-2 transition-all hover:bg-amber-400 hover:cursor-pointer hover:rounded-none">Adicionar</button>
      </CommissionsContainer>

      <Footer />
    </>
  );
}
