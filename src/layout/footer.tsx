import { BugIcon } from 'lucide-react';
import { FooterLink } from '../components/footer-link';

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white w-full px-8 py-3">
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <FooterLink href="https://github.com/kauefraga/artqueue/issues?q=is:issue">
            <BugIcon />
            Relatar bug
          </FooterLink>

          {/* <FooterLink href="/guide">
            <BookOpenIcon />
            Como usar
          </FooterLink> */}
        </div>

        <FooterLink href="https://kauefraga.dev/">
          Feito por Kauê
        </FooterLink>
      </div>
    </footer>
  );
}
