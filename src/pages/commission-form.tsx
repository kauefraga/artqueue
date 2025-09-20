import { ArrowLeftIcon } from 'lucide-react';
import { type FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { CommissionsContainer } from '../components/commissions/commissions-container';
import { useFormContext } from '../contexts/form';
import { useCommissions } from '../hooks/use-commissions';
import { Footer } from '../layout/footer';
import { Header } from '../layout/header';
import { defaultCommission } from '../schemas/commission';

// TODO fix dark theme
export function CommissionFormPage() {
  const navigate = useNavigate();

  const [commission, setCommission] = useFormContext();
  const { commissions, pushCommission } = useCommissions();

  const onBackButton = () => {
    void navigate(-1);
  };
  const onSubmitButton = (event: FormEvent) => {
    event.preventDefault();

    // TODO validate errors
    // show errors to user

    pushCommission({ ...commission, id: commissions.length + 1 });
    setCommission(defaultCommission);
    void navigate('/');
  };

  return (
    <>
      <Header />

      <CommissionsContainer>
        <form
          className="p-6 flex flex-col gap-6 bg-white border border-b-4 border-e-4 rounded-3xl overflow-hidden"
        >
          <div className="-mt-6 self-end -me-6 w-7/12 h-1 bg-amber-400"></div>

          <header className="flex flex-col gap-2">
            <h3 className="text-xl font-medium">Nova comissão</h3>

            <p className="text-black/70">Preencha as informações sobre a encomenda.</p>
          </header>

          <main className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <p>Preço (R$)</p>
              <input
                type="number"
                name="price"
                placeholder="99,99"
                required
                value={commission.price}
                onChange={(e) => {
                  setCommission({ ...commission, price: Number(e.target.value) });
                }}
                className="border-1 rounded-lg p-2 border-b-2 border-e-2 transition-all hover:cursor-pointer hover:rounded-none focus:rounded-none focus:outline-none focus:border-blue-700"
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
                className="border-1 rounded-lg p-2 border-b-2 border-e-2 transition-all hover:cursor-pointer hover:rounded-none focus:rounded-none focus:outline-none focus:border-blue-700"
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
                className="border-1 rounded-lg p-2 border-b-2 border-e-2 transition-all hover:cursor-pointer hover:rounded-none focus:rounded-none focus:outline-none focus:border-blue-700"
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
                className="border-1 rounded-lg p-2 border-b-2 border-e-2 transition-all hover:cursor-pointer hover:rounded-none focus:rounded-none focus:outline-none focus:border-blue-700"
              />
            </div>
          </main>

          <div className="flex gap-6 justify-between">
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
              className="w-full border-1 rounded-lg p-2 border-b-2 border-e-2 transition-all bg-amber-400 hover:cursor-pointer hover:rounded-none"
            >
              Concluir
            </button>
          </div>
        </form>
      </CommissionsContainer>

      <Footer />
    </>
  );
}
