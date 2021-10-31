import dotenv from 'dotenv'

dotenv.config();

type Config = {
  env: string;
  port: string;
  dbUser: string;
  dbPassword: string;
  dbHost: string;
  dbName: string;
  dbPort: string;
}

export const config: Config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || '3031',
  dbUser: process.env.DB_USER || '',
  dbPassword: process.env.DB_PASSWORD || '',
  dbHost: process.env.DB_HOST || '',
  dbName: process.env.DB_NAME || '',
  dbPort: process.env.DB_PORT || '',
}