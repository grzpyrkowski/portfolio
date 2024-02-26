import mysql from "mysql2";

const pool = mysql.createPool({
    host: 'localhost', // if localhost causes error, try change to 127.0.0.1
    user: 'root',
    password: 'Coffee123',
    multipleStatements: true
}).promise();

export default pool