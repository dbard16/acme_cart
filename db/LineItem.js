const conn = require('./conn');

const lineItem = conn.define('lineItem', {
  name: {
    type: conn.Sequelize.INTEGER
  }
})

module.exports = lineItem;
