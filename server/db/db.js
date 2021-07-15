const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/knowi_demo',
  { logging: false }
);

module.exports = db;
