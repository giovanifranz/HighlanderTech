type Select = 'sites' | 'maintenance' | 'mounting';

type FormValues = {
  service: Select;
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
};

type EmptyObject = Record<string, never>;
