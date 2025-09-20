import { useNavigate } from 'react-router';
import { CommissionsContainer } from '../components/commissions/commissions-container';
import { CommissionsList } from '../components/commissions/commissions-list';
import { CommissionsReport } from '../components/commissions/commissions-report';
import { useCommissions } from '../hooks/use-commissions';
import { Footer } from '../layout/footer';
import { Header } from '../layout/header';
import type { Commission } from '../schemas/commission';

function generateMetrics(commissions: Commission[]) {
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

// TODO fix dark theme
export function HomePage() {
  const navigate = useNavigate();
  const { commissions, finishCommission } = useCommissions();

  const metrics = generateMetrics(commissions);
  const pendingCommissions = commissions.filter(c => c.stage !== 'finished');

  const handleAddCommission = () => {
    void navigate('/steps/client');
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

        <button
          onClick={handleAddCommission}
          className="mt-6 w-full border-1 rounded-lg p-2 border-b-2 border-e-2 transition-all hover:bg-amber-400 hover:cursor-pointer hover:rounded-none"
        >
          Adicionar
        </button>
      </CommissionsContainer>

      <Footer />
    </>
  );
}
