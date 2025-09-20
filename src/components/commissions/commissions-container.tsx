import type { ReactNode } from 'react';

interface CommissionsContainerProps {
  children: ReactNode;
}

export function CommissionsContainer({ children }: CommissionsContainerProps) {
  return (
    <main className="max-w-xl w-full mx-auto flex grow flex-col gap-6 items-center px-8 py-3">
      {children}
    </main>
  );
}
