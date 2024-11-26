const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Session = sequelize.define('Session', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  startTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  paidAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Session;
