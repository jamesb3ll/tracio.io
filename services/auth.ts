import jwt, { JwtPayload } from 'jsonwebtoken';
import { createDomain, createTeam, createUser, getUserByEmail } from '../clients/dynamo-db';
import { sendLoginEmail, sendSignUpEmail, sendWelcomeEmail } from '../clients/email';
import { nanoid } from '../utils/utils';

const { JWT_SECRET = 'default_secret' } = process.env;

export async function signUpUserFromDashboard({
  name,
  email,
  domain,
}: {
  name: string;
  email: string;
  domain: string;
}) {
  const teamId = nanoid();
  await createTeam({ teamId });
  await Promise.all([createUser({ name, email, teamId }), createDomain({ domain, teamId })]);
  const token = createLoginToken({ email });
  await sendSignUpEmail({ name, email, token });
}

export async function signup({ name, email }: { name: string; email: string }) {
  if (!name || !email) {
    throw new Error('name and/or email missing');
  }
  const token = createLoginToken({ name, email });
  await sendWelcomeEmail({ name, email, token });
}

export async function login({ email }: { email: string }) {
  const user = await getUserByEmail(email);
  if (!user) {
    throw new Error('email not found');
  }
  const token = createLoginToken({ email });
  await sendLoginEmail({ name: user.name, email, token });
}

export async function createSession(loginToken: string) {
  const { name, email } = verifyLoginToken(loginToken);
  const user = await getUserByEmail(email);
  if (!user) {
    if (!name) throw new Error('createSession: `name` is missing in token');
    await createUser({ name, email });
  }
  return createSessionToken({ email });
}

export function extractSession(token: string) {
  const { aud, sub } = verifySessionToken(token);
  if (aud !== 'session' || !sub) {
    throw new Error('Invalid token');
  }
  return { email: sub };
}

//////////////////////////// Internal Methods \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function createLoginToken({ name, email }: { name?: string; email: string }) {
  const expiresIn = 300; // 5 minutes
  const token = jwt.sign(
    {
      aud: 'login',
      sub: email,
      exp: Math.floor(Date.now() / 1000) + expiresIn,
      ...(name && { name }), // name included for signup
    },
    JWT_SECRET
  );
  return token;
}

function verifyLoginToken(token: string): { name?: string; email: string } {
  const { name, sub: email, aud } = jwt.verify(token, JWT_SECRET) as JwtPayload;
  if (aud !== 'login' || !email) {
    throw new Error('Invalid token');
  }
  return { name, email };
}

function createSessionToken({ email }: { email: string }) {
  const expiresIn = 86400; // 24 hours (x 30 days ≈ 1 month)
  const sessionToken = jwt.sign(
    {
      aud: 'session',
      sub: email,
      exp: Math.floor(Date.now() / 1000) + expiresIn,
    },
    JWT_SECRET
  );
  return sessionToken;
}

function verifySessionToken(token: any) {
  const payload = jwt.verify(token, JWT_SECRET) as JwtPayload;
  return payload;
}
