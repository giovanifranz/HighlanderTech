import sgMail from '@sendgrid/mail';

export async function sendEmail(data: EmailData) {
  sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string);

  const { nome, service, telefone, email, mensagem } = data;
  const msg = {
    to: 'giovanifranz151@gmail.com',
    from: 'comercial@highlandertech.com.br',
    subject: `Nome: ${nome} / Serviço: ${service}`,
    html: `Telefone: ${telefone} <br> E-mail: ${email} <br> Mensagem: ${mensagem}`,
  };

  return sgMail.send(msg).then(
    () => ({ error: null }),
    (error: Error) => ({
      error: error.message,
    }),
  );
}
