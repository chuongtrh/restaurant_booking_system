require('dotenv').config();
module.exports = {
    local: {
        username: process.env.SQL_USERNAME,
        password: process.env.SQL_PASSWORD,
        database: process.env.SQL_DATABASE,
        host: process.env.SQL_HOST,
        port: '5432',
        dialect: 'postgres',
        logging: true
    },
    dev: {
        username: process.env.SQL_USERNAME,
        password: process.env.SQL_PASSWORD,
        database: process.env.SQL_DATABASE,
        host: process.env.SQL_HOST,
        port: '5432',
        dialect: 'postgres',
        logging: false
    }
};
