const Sequelize = require(`sequelize`);

module.exports = new Sequelize(
  `car_store`,
  `root`,
  `qw1234qw`,
  {
    host: `127.0.0.1`,
    dialect: `mysql`
  }
)
