const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes){
    return sequelize.define('Report', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.CHAR(100),
            allowNull: false   
        },
        user: {
            type: DataTypes.CHAR(75),
            allowNull: false
        },
        date: {
            type: DataTypes.CHAR(20),
            allowNull: false
        },
        hour: {
            type: DataTypes.CHAR(20),
            allowNull: false
        },
        status: {
            type: DataTypes.CHAR(50),
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Report',
        tableName: 'Report',
        timestamps: false
    })
}