import jwt, { JwtPayload } from 'jsonwebtoken';
import { createDomain, createTeam, createUser, getUserByEmail } from '../clients/dynamo-db';
import { sendLoginEmail, sendSignUpEmail } from '../clients/email';
import { nanoid } from '../utils/utils';

const { JWT_SECRET = 'default_secret' } = process.env;

export async function signUp({
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

/* export async function invite({
  name,
  email,
  teamId,
}: {
  name: string;
  email: string;
  teamId: string;
}) {
  const token = createLoginToken({ email });
  await sendWelcomeEmail({ name, email, teamId, token });
} */

export async function login({ email }: { email: string }) {
  const user = await getUserByEmail(email);
  if (!user) {
    throw new Error('email not found');
  }
  const token = createLoginToken({ email });
  await sendLoginEmail({ name: user.name, email, token });
}

export async function createSession(loginToken: string) {
  const { email } = verifyLoginToken(loginToken);
  const user = await getUserByEmail(email);
  if (!user) {
    throw new Error(`user not found: ${email}`);
  }
  return createSessionToken({ email, team: user.teamId });
}

export function extractSession(token: string) {
  const { aud, sub, team } = verifySessionToken(token);
  if (aud !== 'session' || !sub) {
    throw new Error('Invalid token');
  }
  return { email: sub, team };
}

//////////////////////////// Internal Methods \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function createLoginToken({ email }: { email: string }) {
  const expiresIn = 300; // 5 minutes
  const token = jwt.sign(
    {
      aud: 'login',
      sub: email,
    },
    JWT_SECRET,
    { expiresIn }
  );
  return token;
}

function verifyLoginToken(token: string): { email: string } {
  const { sub: email, aud } = jwt.verify(token, JWT_SECRET) as JwtPayload;
  if (aud !== 'login' || !email) {
    throw new Error('Invalid token');
  }
  return { email };
}

function createSessionToken({ email, team }: { email: string; team: string }) {
  const expiresIn = 86400; // 24 hours (x 30 days ≈ 1 month)
  const sessionToken = jwt.sign(
    {
      aud: 'session',
      sub: email,
      team,
    },
    JWT_SECRET,
    { expiresIn }
  );
  return sessionToken;
}

function verifySessionToken(token: any) {
  const payload = jwt.verify(token, JWT_SECRET) as JwtPayload & { team: string };
  return payload;
}
