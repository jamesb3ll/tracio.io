import { NextApiRequest, NextApiResponse } from 'next';
import { destroyCookie } from 'nookies';

export default async function logoutHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).send(`Unsupported Method: ${req.method}`);
  }
  destroyCookie({ res }, 'session', { path: '/' });
  return res.redirect(307, '/login');
}
