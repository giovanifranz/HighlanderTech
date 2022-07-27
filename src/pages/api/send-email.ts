import { NextApiRequest, NextApiResponse } from 'next';

import { sendEmail } from '../../utils/sendEmail';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data: EmailData = req.body;

    const { error } = await sendEmail(data);

    if (!error) {
      return res.status(200).end();
    }

    return res.status(500).json({
      error: { message: error },
    });
  }

  return res.status(404).json({
    error: {
      code: 'not_found',
      message:
        "The requested endpoint was not found or doesn't support this method.",
    },
  });
};
