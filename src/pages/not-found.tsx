import { CommissionsContainer } from '../components/commissions/commissions-container';
import { Footer } from '../layout/footer';
import { HeaderForm } from '../layout/header-form';

export function NotFoundPage() {
  return (
    <>
      <HeaderForm />

      <CommissionsContainer>
        <h3 className="text-xl font-medium">Essa página não existe!</h3>
        <p className="text-center">A página pode estar em desenvolvimento, em manutenção ou não existir no site.</p>
        <a href="/" className="w-2/3 text-center border-1 rounded-lg p-2 border-b-2 border-e-2 transition-all bg-amber-400 hover:cursor-pointer hover:rounded-none dark:text-black dark:border-white">Voltar</a>
      </CommissionsContainer>

      <Footer />
    </>
  );
}
