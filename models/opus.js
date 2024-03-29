const sequelize = require('../config/sequelize')
const DataTypes = require('sequelize').DataTypes;
const Sequelize = require('sequelize')


const Opus = sequelize.define('opus', {
    title: DataTypes.STRING(255),
    alias: {
        type: DataTypes.STRING(255),
        unique: true
    },
    opusType: {
        type: DataTypes.ENUM,
        values: [
            'book',
            'opera',
            'other'
        ],
        defaultValue: 'book'
    }
}, {});

module.exports = Opus