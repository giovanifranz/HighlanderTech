type Select = 'sites' | 'maintenance' | 'mounting';

type FormValues = {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
};

type EmailData = FormValues & {
  service: string;
};

type EmptyObject = Record<string, never>;
