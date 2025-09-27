import { ArrowLeftIcon } from 'lucide-react';
import { useNavigate } from 'react-router';
import { CommissionsContainer } from '../components/commissions/commissions-container';
import { useFormContext } from '../contexts/form';
import { useCommissions } from '../hooks/use-commissions';
import { Footer } from '../layout/footer';
import { Header } from '../layout/header';
import { defaultCommission } from '../schemas/commission';

export function CommissionFormPage() {
  const navigate = useNavigate();

  const [commission, setCommission] = useFormContext();
  const { commissions, pushCommission } = useCommissions();

  const onBackButton = () => {
    void navigate('/steps/client');
  };
  const onSubmitButton = () => {
    const form = document.getElementById('commission-form') as HTMLFormElement | null;

    if (form && form.checkValidity()) {
      pushCommission({ ...commission, id: commissions.length + 1 });
      setCommission(defaultCommission);
      void navigate('/');
    }
  };

  return (
    <>
      <Header />

      <CommissionsContainer>
        <div className="mb-5 w-full flex flex-col bg-white border border-b-4 border-e-4 rounded-3xl overflow-hidden dark:bg-zinc-800 dark:border-white">
          <div className="w-full h-1 bg-black/10 dark:bg-white/20">
            <div className="w-full h-full bg-amber-400 transition-all duration-300"></div>
          </div>

          <header className="px-6 mt-6 flex flex-col gap-1">
            <h3 className="text-xl font-medium">Nova comissão</h3>
            <p className="text-black/70 dark:text-white/70">Preencha as informações sobre a encomenda.</p>
          </header>

          <form
            id="commission-form"
            onSubmit={(e) => { e.preventDefault(); }}
            className="px-6 mt-3 mb-6 flex flex-col gap-3"
          >
            <div className="flex flex-col gap-2">
              <p>Preço (R$)</p>
              <input
                type="number"
                name="price"
                autoComplete="off"
                min="0"
                max="9999999999"
                step="0.01"
                placeholder="99,99"
                autoFocus
                required
                value={commission.price || ''}
                onChange={(e) => {
                  const price = parseFloat(e.target.value.replace(',', '.'));
                  const isNonNegativeNumber = !isNaN(price) && price >= 0;

                  if (isNonNegativeNumber) {
                    setCommission({
                      ...commission,
                      price,
                    });
                  }
                }}
                style={{
                  WebkitAppearance: 'none',
                  MozAppearance: 'textfield',
                }}
                className="border-1 rounded-lg px-4 py-2 border-b-2 border-e-2 transition-all hover:cursor-pointer hover:rounded-none focus:rounded-none focus:outline-none focus:border-blue-700"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p>Etapa do pagamento</p>
              <select
                name="paymentStatus"
                required
                value={commission.paymentStatus}
                onChange={(e) => {
                  setCommission({ ...commission, paymentStatus: e.target.value as 'not_paid' | 'half_paid' | 'paid' });
                }}
                className="border-1 rounded-lg px-4 py-2 border-b-2 border-e-2 transition-all hover:cursor-pointer hover:rounded-none focus:rounded-none focus:outline-none focus:border-blue-700"
              >
                <option value="not_paid">Não pagou</option>
                <option value="half_paid">Pagou metade</option>
                <option value="paid">Pagou tudo</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <p>Etapa da encomenda</p>
              <select
                name="stage"
                required
                value={commission.stage}
                onChange={(e) => {
                  setCommission({ ...commission, stage: e.target.value as 'in_queue' | 'sketch' | 'line' | 'paint' | 'finished' });
                }}
                className="border-1 rounded-lg px-4 py-2 border-b-2 border-e-2 transition-all hover:cursor-pointer hover:rounded-none focus:rounded-none focus:outline-none focus:border-blue-700"
              >
                <option value="in_queue">Na fila</option>
                <option value="sketch">Esboço</option>
                <option value="line">Line art</option>
                <option value="paint">Pintura</option>
                <option value="finished">Finalizada</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <p>Prazo de entrega</p>
              <input
                type="date"
                name="deadlineDate"
                value={commission.deadlineDate?.toISOString().substring(0, 10) ?? new Date().toISOString().substring(0, 10)}
                onChange={(e) => {
                  setCommission({ ...commission, deadlineDate: new Date(e.target.value) });
                }}
                className="border-1 rounded-lg px-4 py-2 border-b-2 border-e-2 transition-all hover:cursor-pointer hover:rounded-none focus:rounded-none focus:outline-none focus:border-blue-700"
              />
            </div>

            <div className="mt-3 flex gap-6 justify-between">
              <button
                type="reset"
                onClick={onBackButton}
                className="flex gap-2 border-1 rounded-lg p-2 border-b-2 border-e-2 transition-all hover:bg-black/20 hover:cursor-pointer hover:rounded-none"
              >
                <ArrowLeftIcon />
                Voltar
              </button>

              <button
                onClick={onSubmitButton}
                className="w-full border-1 rounded-lg p-2 border-b-2 border-e-2 transition-all bg-amber-400 hover:cursor-pointer hover:rounded-none dark:text-black dark:border-white"
              >
                Concluir
              </button>
            </div>
          </form>
        </div>
      </CommissionsContainer>

      <Footer />
    </>
  );
}
