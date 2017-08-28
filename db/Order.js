
const conn = require('./conn');

const Order = conn.define('order', {
  isCart: {
    type: conn.Sequelize.BOOLEAN,
    defaultValue: true
  },
  address: {
    type: conn.Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Order;
