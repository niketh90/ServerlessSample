import type { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from 'aws-lambda';
import type { FromSchema } from 'json-schema-to-ts';

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, 'body'> & { body: FromSchema<S> };
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<ValidatedAPIGatewayProxyEvent<S>, APIGatewayProxyResult>;

const apiResponses = {
  _200: (body: { [key: string]: any }): any => {
    return {
      statusCode: 200,
      body: JSON.stringify(body, null, 2)
    };
  },
  _400: (body: { [key: string]: any }): any => {
    return {
      statusCode: 400,
      body: JSON.stringify(body, null, 2)
    };
  }
};

export default apiResponses;
