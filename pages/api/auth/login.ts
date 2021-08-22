import { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'nookies';
import { createSession, login, signup } from '../../../services/auth';

export default async function loginHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, name } = req.body as { email: string; name?: string };
    if (!email) {
      return res.status(400).json({ success: false, error: 'email is required' });
    }
    try {
      if (name) {
        await signup({ name, email });
      } else {
        await login({ email });
      }
    } catch (error) {
      return res.status(404).json({ success: false, error: 'email not found' });
    }
    return res.json({ success: true });
  } else if (req.method === 'GET') {
    const { token } = req.query as { token: string };
    if (!token) {
      return res.redirect(307, '/error?message=missing-token');
    }
    try {
      const sessionToken = await createSession(token);
      setCookie({ res }, 'session', sessionToken, {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: '/',
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      });
      return res.redirect(307, '/dashboard');
    } catch (error) {
      return res.redirect(307, '/error?message=invalid-token');
    }
  } else {
    return res.status(405).send(`Unsupported Method: ${req.method}`);
  }
}
