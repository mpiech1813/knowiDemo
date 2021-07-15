const { DataTypes } = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  grade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  daysAttended: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = User;
