const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes){
    return sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.CHAR(100),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.CHAR(100),
            allowNull: false
        }
    }, {
        sequelize, 
        modelName: 'User',
        tableName: 'User',
        timestamps: false
    })
}