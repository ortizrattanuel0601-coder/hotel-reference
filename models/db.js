const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Manuelgeraldine2301',
    database: 'mydb',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10
});

module.exports = pool;
