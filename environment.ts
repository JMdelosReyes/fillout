import dotenv from 'dotenv';
dotenv.config();

const environment = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_KEY: process.env.API_KEY,
};

export default environment;