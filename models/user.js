'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    user_role: {
      type: DataTypes.ENUM({
        values: ['customer', 'staff', 'seller']
      }),
      defaultValue: 'customer'

    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.ENUM({
        values: ['male', 'female']
      }),
      defaultValue: 'male'
    },
    state: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    pincode: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};