import { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'nookies';
import { createSession, login } from '../../../services/auth';
import { checkCsrfToken } from './csrf';

export default async function loginHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { csrfValid } = await checkCsrfToken(req, res);
    if (!csrfValid) return res.status(403).json({ success: false, error: 'invalid csrf token' });

    const { email, name } = req.body as { email: string; name?: string };
    if (!email) {
      return res.status(400).json({ success: false, error: 'email is required' });
    }
    try {
      if (name) {
        // await signup({ name, email });
        return res.status(501).json({ success: false, error: 'signup not implemented' });
      } else {
        await login({ email });
      }
    } catch (error) {
      return res.status(404).json({ success: false, error: 'email not found' });
    }
    return res.json({ success: true });
  } else if (req.method === 'GET') {
    // TODO: Use CSRF token in email links to verify same user/browser, could be a blocker.
    // const { csrfValid } = await checkCsrfToken(req, res);
    // if (!csrfValid) return res.status(403).send(`Invalid CSRF Token`);
    const { token } = req.query as { token: string };
    if (!token) {
      return res.redirect(302, '/login?error=missing-token');
    }
    try {
      const sessionToken = await createSession(token);
      setCookie({ res }, 'session.token', sessionToken, {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: '/',
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      });
      return res.redirect(302, '/dashboard');
    } catch (error) {
      return res.redirect(302, '/login?error=invalid-token');
    }
  } else {
    return res.status(405).send(`Unsupported Method: ${req.method}`);
  }
}
