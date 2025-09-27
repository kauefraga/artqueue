import { CommissionsContainer } from '../components/commissions/commissions-container';
import { CommissionsList } from '../components/commissions/commissions-list';
import { CommissionsListHeader } from '../components/commissions/commissions-list-header';
import { CommissionsReport } from '../components/commissions/commissions-report';
import { useCommissions } from '../hooks/use-commissions';
import { useCommissionsMetrics } from '../hooks/use-commissions-metrics';
import { Footer } from '../layout/footer';
import { Header } from '../layout/header';

export function FinishedCommissionsPage() {
  const {
    commissions,
    finishCommission,
    clearPendingCommissions,
    clearFinishedCommissions,
  } = useCommissions();

  const metrics = useCommissionsMetrics(commissions);
  const finishedCommissions = commissions.filter(c => c.stage === 'finished');

  return (
    <>
      <Header
        onCleanPendingCommissions={clearPendingCommissions}
        onCleanFinishedCommissions={clearFinishedCommissions}
      />

      <CommissionsContainer>
        <CommissionsListHeader
          subtitle="Comissões concluídas"
          title="Você fez um bom trabalho!"
        />

        <CommissionsReport metrics={metrics} />

        <CommissionsList
          commissions={finishedCommissions}
          finishCommissionHandler={finishCommission}
        />
      </CommissionsContainer>

      <Footer />
    </>
  );
}
