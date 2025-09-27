import { ArrowLeftIcon } from 'lucide-react';
import { type FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { CommissionsContainer } from '../components/commissions/commissions-container';
import { useFormContext } from '../contexts/form';
import { Footer } from '../layout/footer';
import { HeaderForm } from '../layout/header-form';

export function ClientFormPage() {
  const navigate = useNavigate();

  const [commission, setCommission] = useFormContext();

  const onBackButton = () => {
    void navigate('/');
  };
  const onNextButton = (event: FormEvent) => {
    event.preventDefault();

    // TODO validate errors
    // show errors to user

    void navigate('/steps/commission');
  };

  return (
    <>
      <HeaderForm />

      <CommissionsContainer>
        <form
          className="w-full p-6 flex flex-col gap-6 bg-white border border-b-4 border-e-4 rounded-3xl overflow-hidden dark:bg-zinc-800 dark:border-white"
        >
          <div className="-mt-6 -ms-6 w-7/12 h-1 bg-amber-400"></div>

          <header className="flex flex-col gap-2">
            <h3 className="text-xl font-medium">Nova comissão</h3>

            <p className="text-black/70 dark:text-white/70">Preencha as informações sobre seu cliente.</p>
          </header>

          <main className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <p>Nome do cliente</p>
              <input
                type="text"
                name="name"
                placeholder="João"
                required
                value={commission.name}
                onChange={(e) => {
                  setCommission({ ...commission, name: e.target.value });
                }}
                className="border-1 rounded-lg p-2 border-b-2 border-e-2 transition-all hover:cursor-pointer hover:rounded-none focus:rounded-none focus:outline-none focus:border-blue-700"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p>Twitter do cliente (@)</p>
              <input
                type="text"
                name="twitter"
                placeholder="joaodasartes123"
                value={commission.twitter}
                onChange={(e) => { setCommission({ ...commission, twitter: e.target.value }); }}
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
              onClick={onNextButton}
              className="flex gap-2 justify-center w-full border-1 rounded-lg p-2 border-b-2 border-e-2 transition-all bg-amber-400 hover:cursor-pointer hover:rounded-none dark:text-black dark:border-white"
            >
              Continuar
            </button>
          </div>
        </form>
      </CommissionsContainer>

      <Footer />
    </>
  );
}
