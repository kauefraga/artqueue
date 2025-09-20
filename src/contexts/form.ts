import { createContext, useContext, type Dispatch, type SetStateAction } from 'react';
import type { Commission } from '../schemas/commission';

export const FormContext = createContext<[Commission, Dispatch<SetStateAction<Commission>>] | null>(null);

export function useFormContext() {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('`useFormContext` must be used within the FormContextProvider');
  }

  return context;
}
