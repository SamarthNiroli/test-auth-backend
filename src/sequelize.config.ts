require('ts-node/register');
require('dotenv').config();
const path = require('path');

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    migrations: {
      path: path.resolve(__dirname, 'src', 'migrations'),
      pattern: /\.ts$/,
    },
  },
};
