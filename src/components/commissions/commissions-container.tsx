import type { ReactNode } from 'react';

interface CommissionsContainerProps {
  children: ReactNode;
}

export function CommissionsContainer({ children }: CommissionsContainerProps) {
  return (
    <main className="max-w-xl mx-auto flex grow flex-col gap-6 items-center mb-12 px-8 py-3">
      {children}
    </main>
  );
}
