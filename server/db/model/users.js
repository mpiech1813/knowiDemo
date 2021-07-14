const { DataTypes } = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  grade: {
    type: DataTypes.INTEGER,
    allowNull: flase,
  },
});

module.exports = User;
