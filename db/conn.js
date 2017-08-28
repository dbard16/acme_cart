const Sequelize = require('sequelize');

const conn = new Sequelize('postgres://localhost/acmecart', {
  logging: false
});

module.exports = conn;
