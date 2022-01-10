const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes){
    return sequelize.define('Switch', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Switch',
        tableName: 'Switch',
        timestamps: false
    })
}