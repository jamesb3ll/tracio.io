import { NextApiRequest, NextApiResponse } from 'next';
import { destroyCookie } from 'nookies';
import { checkCsrfToken } from './csrf';

export default async function logoutHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).send(`Unsupported Method: ${req.method}`);
  }
  const { csrfValid } = await checkCsrfToken(req, res);
  if (!csrfValid) {
    return res.status(403).send(`Invalid CSRF Token`);
  }
  destroyCookie({ res }, 'session.token', { path: '/' });
  return res.redirect(302, '/login');
}
