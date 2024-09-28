require('dotenv').config();

const { DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_PORT, DB_NAME } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOSTNAME,
    port: DB_PORT,
    database: DB_NAME,
    dialect: 'postgres',
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOSTNAME,
    port: DB_PORT,
    database: DB_NAME,
    dialect: 'postgres',
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOSTNAME,
    port: DB_PORT,
    database: DB_NAME,
    dialect: 'postgres',
  },
};
