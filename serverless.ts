import type { AWS } from '@serverless/typescript';
import schema from './src/lambda/translate/schema/schema'
const serverlessConfiguration: AWS = {
  service: 'translationautomation',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true
    }
  },
  plugins: ['serverless-webpack','serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  functions: { 
    translate :{    
      handler: 'src/lambda/translate/handler.main',
      events: [
          {
              http: {
                  path: 'translate',
                  method: 'POST',
                  cors: true,
                  request:{
                    schema: {
                      'application/json': schema
                    }
                  }
              },
          },
      ],
  }
}
}
module.exports = serverlessConfiguration;
