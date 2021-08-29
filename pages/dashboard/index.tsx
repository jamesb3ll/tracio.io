import { useRouter } from 'next/router';
import { useSession } from '../../hooks/auth';
export default function DashboardRedirect() {
  const [user, loading] = useSession();
  const router = useRouter();
  if (loading) return 'Loading...';
  if (!user) {
    router.replace('/login');
    return null;
  }
  const {
    domains: [firstDomain],
  } = user;
  router.replace('/dashboard/' + firstDomain.domain);
  return null;
}
