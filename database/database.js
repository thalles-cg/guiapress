const Sequelize = require('sequelize');
const connection = new Sequelize('guiapress', 'root', '1975sql', {
   host: 'localhost',
   dialect: 'mysql',
});

module.exports = connection;
