import dotenv from 'dotenv';

dotenv.load({ silent: true });

export default {
  development: {
    LAMBDA_MONGO_URI_DEV: JSON.stringify(process.env.LAMBDA_MONGO_URI_DEV),
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    PORT: JSON.stringify(3000),
    BASE_URL: JSON.stringify(process.env.BASE_URL),
  },
  production: {
    LAMBDA_MONGO_URI: JSON.stringify(process.env.LAMBDA_MONGO_URI),
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    PORT: JSON.stringify(process.env.PORT),
    DEPLOY_URL: JSON.stringify(process.env.DEPLOY_URL),
  },
};
