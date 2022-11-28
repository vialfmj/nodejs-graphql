const dotenv = require('dotenv').config()

const config = {
    port : process.env.PORT || 8080,
    ENV: process.env.ENVIROMENT || 'DEVELOPMENT',
}
const mongo = {
    DB_USER: process.env.DB_USER || 'root',
    DB_PASS: process.env.DB_PASS || 'root'
}

module.exports = {
    config,
    mongo
}