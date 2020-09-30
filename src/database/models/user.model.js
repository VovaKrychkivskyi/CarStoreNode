const {Model, DataTypes} = require('sequelize');
const sequelize = require('../../configs/sequalize.config');

const {TABLE_NAME_USER} = require(`../../configs/const.config`);

class UserModel extends Model {
}

UserModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: TABLE_NAME_USER,
  tableName: TABLE_NAME_USER,
  timestamps: false
})

module.exports = UserModel;