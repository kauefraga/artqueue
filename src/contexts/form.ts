import { createContext, useContext, type Dispatch, type SetStateAction } from 'react';
import type { Commission } from '../schemas/commission';

type FormContextValue = {
  commission: Commission;
  setCommission: Dispatch<SetStateAction<Commission>>;
  resetCommission: () => void;
};

export const FormContext = createContext<FormContextValue | null>(null);

export function useFormContext() {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('`useFormContext` must be used within the FormContextProvider');
  }

  return context;
}
