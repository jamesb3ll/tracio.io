import aws from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

const { ACCESS_KEY, SECRET_KEY, REGION, TABLE_NAME = 'tracio' } = process.env;

const log = (...args: any) => console.log('[dynamodb-client]', ...args);

const client = new aws.DynamoDB.DocumentClient({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_KEY,
  region: REGION,
});

export const get = async (params: Omit<DocumentClient.GetItemInput, 'TableName'>) => {
  log('getItem', params);
  console.time('getItem');
  const result = await client.get({ TableName: TABLE_NAME, ...params }).promise();
  console.timeEnd('getItem');
  return result;
};
export const put = async (params: Omit<DocumentClient.PutItemInput, 'TableName'>) => {
  log('putItem', params);
  console.time('putItem');
  const result = await client.put({ TableName: TABLE_NAME, ...params }).promise();
  console.timeEnd('putItem');
  return result;
};
export const query = async (params: Omit<DocumentClient.QueryInput, 'TableName'>) => {
  log('query', params);
  console.time('query');
  const result = await client.query({ TableName: TABLE_NAME, ...params }).promise();
  console.timeEnd('query');
  return result;
};
export const update = async (params: Omit<DocumentClient.UpdateItemInput, 'TableName'>) => {
  log('updateItem', params);
  console.time('updateItem');
  const result = await client.update({ TableName: TABLE_NAME, ...params }).promise();
  console.timeEnd('updateItem');
  return result;
};
export const remove = async (params: Omit<DocumentClient.DeleteItemInput, 'TableName'>) => {
  log('deleteItem', params);
  console.time('deleteItem');
  const result = await client.delete({ TableName: TABLE_NAME, ...params }).promise();
  console.timeEnd('deleteItem');
  return result;
};

export async function getUserByEmail(email: string) {
  const { Item } = await get({
    Key: {
      PK: `user#${email}`,
      SK: `user#${email}`,
    },
  });
  return Item;
}

export async function getDomain(domain: string) {
  const { Item } = await get({
    Key: {
      PK: `domain#${domain}`,
      SK: `domain#${domain}`,
    },
  });
  return Item;
}

export async function getUserTeam(email: string, teamId: string) {
  const { Items } = await query({
    IndexName: 'gsi_team',
    KeyConditionExpression: 'PK = :team',
    FilterExpression: 'begins_with(SK, :allDomains) OR SK = :team OR SK = :user',
    ExpressionAttributeValues: {
      ':team': `team#${teamId}`,
      ':user': `user#${email}`,
      ':allDomains': 'domain#',
    },
  });
  return Items;
}

export async function getInvoicesByTeam(teamId: string) {
  const { Items } = await query({
    IndexName: 'gsi_team',
    KeyConditionExpression: 'PK = :team AND begins_with(SK, :allInvoices)',
    ExpressionAttributeValues: {
      ':team': `team#${teamId}`,
      ':allInvoices': 'invoice#',
    },
  });
  return Items;
}

export async function getAllUsersByTeam(teamId: string) {
  const { Items } = await query({
    IndexName: 'gsi_team',
    KeyConditionExpression: 'PK = :team AND begins_with(SK, :allUsers)',
    ExpressionAttributeValues: {
      ':team': `team#${teamId}`,
      ':allUsers': 'user#',
    },
  });
  return Items;
}

export async function createUser({
  email,
  name,
  teamId,
}: {
  email: string;
  name: string;
  teamId?: string;
}) {
  await put({
    Item: {
      PK: `user#${email}`,
      SK: `user#${email}`,
      itemType: 'user',
      name,
      email,
      isActive: false, // Only active after first login
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...(teamId && { teamId, GSI1_PK: `team#${teamId}` }),
    },
  });
}

export async function updateUser(
  email: string,
  {
    name,
    isActive,
  }: {
    name?: string;
    isActive?: string;
  }
) {
  const expression = [
    name && '#name = :name',
    isActive && '#isActive = :isActive',
    'updatedAt = :now',
  ]
    .filter(Boolean)
    .join(', ');

  await update({
    Key: {
      PK: `user#${email}`,
      SK: `user#${email}`,
    },
    UpdateExpression: 'SET ' + expression,
    ExpressionAttributeNames: {
      '#name': 'name',
      '#isActive': 'isActive',
    },
    ExpressionAttributeValues: {
      ':name': name,
      ':isActive': isActive,
      ':now': new Date().toISOString(),
    },
    ReturnValues: 'NONE',
  });
}

export async function createTeam({ teamId, name }: { teamId: string; name?: string }) {
  await put({
    Item: {
      PK: `team#${teamId}`,
      SK: `team#${teamId}`,
      GSI1_PK: `team#${teamId}`,
      itemType: 'team',
      teamId,
      ...(name && { name }),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  });
}

export async function createDomain({ domain, teamId }: { domain: string; teamId?: string }) {
  await put({
    Item: {
      PK: `domain#${domain}`,
      SK: `domain#${domain}`,
      itemType: 'domain',
      isPublic: false,
      isClaimed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...(teamId && { teamId, GSI1_PK: `team#${teamId}` }),
    },
  });
}

export async function claimDomain({ domain, teamId }: { domain: string; teamId: string }) {
  await update({
    Key: {
      PK: `domain#${domain}`,
      SK: `domain#${domain}`,
    },
    UpdateExpression:
      'SET #isClaimed = :isClaimed, #teamId = :teamId, GSI1_PK = :gsi1_pk, updatedAt = :now',
    ExpressionAttributeNames: {
      '#isClaimed': 'isClaimed',
      '#teamId': 'teamId',
    },
    ExpressionAttributeValues: {
      ':isClaimed': true,
      ':teamId': teamId,
      ':gsi1_pk': `team#${teamId}`,
      ':now': new Date().toISOString(),
    },
    ReturnValues: 'NONE',
  });
}
