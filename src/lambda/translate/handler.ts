import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from 'src/lambda/common/apiResponses';
import apiResponses from '../common/apiResponses';
import { middyfy } from 'src/lambda/common/middy';

import schema from './schema/schema';

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  return apiResponses._200({ event });
};

export const main = middyfy(handler);
