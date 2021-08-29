import { NextApiRequest, NextApiResponse } from 'next';
import { randomBytes } from 'crypto';
import { setCookie } from 'nookies';

const CSRF_TOKEN_COOKIE = 'csrf.token';

/**
 * Ensure CSRF Token cookie is set for any subsequent requests.
 * Used as part of the strateigy for mitigation for CSRF tokens.
 *
 * For more details, see the following OWASP links:
 * https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#double-submit-cookie
 * https://owasp.org/www-chapter-london/assets/slides/David_Johansson-Double_Defeat_of_Double-Submit_Cookie.pdf
 */
export async function checkCsrfToken(req: NextApiRequest, res: NextApiResponse) {
  const csrfTokenCookie = req.cookies[CSRF_TOKEN_COOKIE];
  const csrfToken = csrfTokenCookie || randomBytes(32).toString('hex');

  // If no csrfToken from cookie - because it's not been set yet, so set the cookie.
  if (!csrfTokenCookie) {
    setCookie({ res }, CSRF_TOKEN_COOKIE, csrfToken, {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });
  }

  // If this is a POST request and the CSRF Token in the POST request matches the cookie
  // or this is a GET request and the CSRF Token in the query parameters matches the cookie,
  // then the token is verified!
  const csrfValid =
    (req.method === 'POST' && csrfToken === req.body.csrfToken) ||
    (req.method === 'GET' && csrfToken === req.query.csrfToken);

  return { csrfToken, csrfValid };
}

/**
 * Handler for the client to get a CSRF token to attach to a request.
 * Used as part of the strateigy for mitigation for CSRF tokens.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { csrfToken } = await checkCsrfToken(req, res);
  return res.json({ csrfToken });
}
