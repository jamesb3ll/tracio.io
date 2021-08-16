#!/usr/bin/env node

import { App, Stack } from '@aws-cdk/core';
import * as dynamodb from '@aws-cdk/aws-dynamodb';

class TracioStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // https://docs.aws.amazon.com/cdk/api/latest/docs/aws-dynamodb-readme.html
    const table = new dynamodb.Table(this, 'tracio', {
      tableName: 'tracio',
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST, // Use on-demand billing mode
      partitionKey: { name: 'PK', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'SK', type: dynamodb.AttributeType.STRING },
    });

    table.addGlobalSecondaryIndex({
      indexName: 'GSI1',
      partitionKey: { name: 'GSI1_PK', type: dynamodb.AttributeType.STRING },
    });
  }
}

const app = new App();
new TracioStack(app, 'TracioStack', {
  // env: {
  //   account: process.env.CDK_DEFAULT_ACCOUNT,
  //   region: process.env.REGION,
  // },
});
