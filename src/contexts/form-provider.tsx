import { useState, type ReactNode } from 'react';
import { defaultCommission } from '../schemas/commission';
import { FormContext } from './form';

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const [commission, setCommission] = useState(defaultCommission);

  const resetCommission = () => {
    setCommission(defaultCommission);
  };

  const value = {
    commission,
    setCommission,
    resetCommission,
  };

  return (
    <FormContext value={value}>
      {children}
    </FormContext>
  );
};
