const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER,process.env.POSTGRES_PASSWORD, {
    host:'db',
    dialect:'postgres'
});

const testDbConnection = async () => {
    try
    {
        await sequelize.authenticate();
        console.log('🏠 database connected !!!');
    }
    catch (error)
    {
        console.log(`Unable to connect to database: ${error}`);
    }
};

module.exports = { sq : sequelize,  testDbConnection };