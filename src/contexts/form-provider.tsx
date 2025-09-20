import { useState, type ReactNode } from 'react';
import { defaultCommission } from '../schemas/commission';
import { FormContext } from './form';

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const value = useState(defaultCommission);

  return (
    <FormContext value={value}>
      {children}
    </FormContext>
  );
};
