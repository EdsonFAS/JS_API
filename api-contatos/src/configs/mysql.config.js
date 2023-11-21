const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3307',
    user: 'root',
    password: 'root',
    database:'api_contatos_db'
});

module.exports = connection;