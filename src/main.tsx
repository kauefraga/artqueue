import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './main.css';

import { FormContextProvider } from './contexts/form-provider.tsx';
import { ClientFormPage } from './pages/client-form.tsx';
import { CommissionFormPage } from './pages/commission-form.tsx';
import { HomePage } from './pages/home.tsx';
import { NotFoundPage } from './pages/not-found.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/steps/client" element={<ClientFormPage />} />
          <Route path="/steps/commission" element={<CommissionFormPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </FormContextProvider>
  </StrictMode>,
);
