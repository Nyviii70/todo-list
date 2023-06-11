const { Client } = require('pg');
require('dotenv').config();

const config = {
    host: "db",
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
};
const pool = new Client(config);
pool
    .connect()
    .then(() => {
        console.log('🏠 database connected !!!');
    })
    .catch((err) => {
        console.log("pg user " + process.env.POSTGRES_USER);
        console.log(err);
    });
    
module.exports = pool;