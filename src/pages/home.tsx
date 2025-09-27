import { useNavigate } from 'react-router';
import { CommissionsContainer } from '../components/commissions/commissions-container';
import { CommissionsList } from '../components/commissions/commissions-list';
import { CommissionsListHeader } from '../components/commissions/commissions-list-header';
import { CommissionsReport } from '../components/commissions/commissions-report';
import { useCommissions } from '../hooks/use-commissions';
import { useCommissionsMetrics } from '../hooks/use-commissions-metrics';
import { Footer } from '../layout/footer';
import { Header } from '../layout/header';

export function HomePage() {
  const navigate = useNavigate();
  const {
    commissions,
    finishCommission,
    clearPendingCommissions,
    clearFinishedCommissions,
  } = useCommissions();

  const metrics = useCommissionsMetrics(commissions);
  const pendingCommissions = commissions.filter(c => c.stage !== 'finished');

  const handleAddCommission = () => {
    void navigate('/steps/client');
  };

  return (
    <>
      <Header
        onCleanPendingCommissions={clearPendingCommissions}
        onCleanFinishedCommissions={clearFinishedCommissions}
      />

      <CommissionsContainer>
        <CommissionsListHeader
          subtitle="Fila de comissões"
          title="Qual é a sua próxima encomenda?"
        />

        <CommissionsReport metrics={metrics} />

        <CommissionsList
          commissions={pendingCommissions}
          finishCommissionHandler={finishCommission}
        />

        <button
          onClick={handleAddCommission}
          className="mt-6 w-full border-1 rounded-lg p-2 border-b-2 border-e-2 transition-all hover:bg-amber-400 hover:cursor-pointer hover:rounded-none dark:hover:text-black dark:border-white"
        >
          Adicionar
        </button>
      </CommissionsContainer>

      <Footer />
    </>
  );
}
