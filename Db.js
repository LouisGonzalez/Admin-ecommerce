const { Sequelize } = require('sequelize');
const { database } = require('./config');
const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password, {
        host: database.host,
        dialect: "mysql",
        dialectOptions: {
            ssl: {
                required: true,
                rejectUnauthorized: false
            }
        },
        pool: {
            max: 5,
            min: 0,
            idle: 1000
        }
    }
);

const reportModel = require('./Model/Report');
const Report = reportModel(sequelize, Sequelize);

const switchModel = require('./Model/Switch');
const Switch = switchModel(sequelize, Sequelize);

const userModel = require('./Model/User');
const User = userModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
    console.log('Tablas sincronizadas');
}).catch(err => console.log(err));

module.exports = {
    sequelize,
    Report,
    Switch,
    User
}