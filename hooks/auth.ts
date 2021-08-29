import useSWR from 'swr';

interface User {
  name: string;
  email: string;
  team: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  domains: {
    domain: string;
    isClaimed: boolean;
    isPublic: boolean;
    updatedAt: string;
    createdAt: string;
  }[];
}

const fetcher = async (url: string) => {
  const response = await fetch(url, { credentials: 'include' });
  if (!response.ok) throw new Error(response.statusText);
  return await response.json();
};

export function useSession() {
  const { data: user, error } = useSWR<User>('/api/auth/me', fetcher);
  return [(!error && user) || undefined, !user && !error] as const;
}

export async function getCsrfToken(): Promise<string> {
  const { csrfToken } = await (await fetch('/api/auth/csrf')).json();
  return csrfToken;
}

export async function login(email: string): Promise<{ success: boolean; error?: string }> {
  const csrfToken = await getCsrfToken();
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, csrfToken }),
  });
  return await response.json();
}

export async function logout() {
  const csrfToken = await getCsrfToken();
  window.location.assign(`/api/auth/logout?csrfToken=${csrfToken}`);
}
