import { useCallback } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

import { useSelect } from './useSelect';

export function useEmail() {
  const { select } = useSelect();
  return useCallback(
    async (values: FormValues) => {
      const data = { ...values, service: select };
      await axios({
        method: 'post',
        url: '/api/send-email',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({ data }),
      })
        .then(() => {
          toast.success('Email enviado com Sucesso!', {
            position: 'top-right',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((error: Error) => {
          toast.error(error.message, {
            position: 'top-right',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        });
    },
    [select],
  );
}
