export async function sendSignUpEmail({
  name,
  email,
  token,
}: {
  name: string;
  email: string;
  token: string;
}) {
  console.log('sendSignUpEmail');
  console.log({ name, email, token });
}

export async function sendWelcomeEmail({
  name,
  email,
  token,
}: {
  name: string;
  email: string;
  token: string;
}) {
  console.log('sendWelcomeEmail');
  console.log({ name, email, token });
}
export async function sendLoginEmail({
  name,
  email,
  token,
}: {
  name: any;
  email: string;
  token: string;
}) {
  console.log('sendLoginEmail');
  console.log({ name, email, token });
}
