import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { parseCookies } from 'nookies';
import { getUserTeam } from '../../../clients/dynamo-db';
import { extractSession } from '../../../services/auth';

const getItemType = (type: string) => (Items: DocumentClient.ItemList) =>
  Items.filter(({ itemType }) => itemType === type);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).send(`Unsupported Method: ${req.method}`);
  }
  try {
    const cookies = parseCookies({ req });
    const { email, team: teamId } = extractSession(cookies['session.token']);
    // Move logic below to DAO (using a data validator)
    const Items = await getUserTeam(email, teamId);
    if (!Items) throw new Error(`Could not find users team: ${email}|${teamId}`);
    const [user] = getItemType('user')(Items);
    const [team] = getItemType('team')(Items);
    const domains = getItemType('domain')(Items);
    if (!user || !team || !domains.length) {
      throw new Error(`Could not find users profile, domains or team: ${email}|${teamId}`);
    }
    return res.json({
      name: user.name,
      email,
      team: { id: team.teamId, createdAt: team.createdAt, updatedAt: team.updatedAt },
      domains: domains.map(({ PK, SK, GSI1_PK, itemType, teamId, ...domain }) => domain),
    });
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: 'unauthorized' });
  }
}
