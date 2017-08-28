const Sequelize = require('sequelize');

const conn = require('./conn');
const lineItem = require('./lineItem')
const order = require('./order')
const product = require('./product')

const models = {
  lineItem,
  order,
  product
}

const sync = ()=> conn.sync({force:true})

module.exports = {
  sync,
  models
  }
