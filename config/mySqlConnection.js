require('dotenv').config();
const mysql = require('mysql2/promise');

const config = {
    user:process.env.DEBUG,
    password:process.env.DEBUG,
    database:process.env.DEBUG,
    host:process.env.DEBUG,
    port:process.env.DEBUG
}

    