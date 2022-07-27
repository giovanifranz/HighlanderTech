type Select = 'sites' | 'maintenance' | 'mounting';

type FormValues = {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
};

type EmptyObject = Record<string, never>;
