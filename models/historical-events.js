const sequelize = require('../config/sequelize')
const DataTypes = require('sequelize').DataTypes;
const Sequelize = require('sequelize')


const Historicalevents = sequelize.define('historicalevents', {
    name: DataTypes.STRING(255),
    alias: {
        type: DataTypes.STRING(255),
        unique: true
    },
    image: DataTypes.STRING,
    smallDesc: DataTypes.TEXT,
    longDesc: DataTypes.TEXT,
    fromDate: {
        type: DataTypes.DATEONLY
    },
    toDate: {
        type: DataTypes.DATEONLY
    }
});

module.exports = Historicalevents