import sgMail from '@sendgrid/mail';

type data = {
  service: string;
  email: string;
  telefone: string;
  nome: string;
  mensagem: string;
};

export async function sendEmail(data: data) {
  sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string);
  const msg = {
    to: 'giovanifranz151@gmail.com',
    from: 'comercial@highlandertech.com.br',
    subject: `Nome: ${data.nome} / Serviço: ${data.service}`,
    html: `Telefone: ${data.telefone} <br> E-mail: ${data.email} <br> Mensagem: ${data.mensagem}`,
  };
  const status = await sgMail.send(msg).then(
    () => ({ error: null }),
    (error: Error) => ({
      error: error.message,
    }),
  );
  return status;
}
