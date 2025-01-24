require('dotenv').config();

const {
  DB_CONNECTION,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOSTNAME,
  DB_PORT,
  DB_NAME,
} = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOSTNAME,
    port: DB_PORT,
    database: DB_NAME,
    dialect: DB_CONNECTION,
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOSTNAME,
    port: DB_PORT,
    database: DB_NAME,
    dialect: DB_CONNECTION,
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOSTNAME,
    port: DB_PORT,
    database: DB_NAME,
    dialect: DB_CONNECTION,
  },
};
