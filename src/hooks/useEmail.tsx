import { useCallback } from 'react';
import type { ToastOptions } from 'react-toastify';
import { toast } from 'react-toastify';

import { useSelect } from './useSelect';

const TOAST_CONFIG: ToastOptions = {
  position: 'top-right',
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
};

export function useEmail() {
  const { select } = useSelect();
  return useCallback(
    async (values: FormValues) => {
      const data = { ...values, service: select };
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success('Email enviado com Sucesso!', TOAST_CONFIG);
      } else {
        toast.error('Erro ao enviar e-mail!', TOAST_CONFIG);
      }
    },
    [select],
  );
}
