import mysql from "mysql2";

const pool = mysql.createPool({
    host: '', // if localhost causes error, try change to 127.0.0.1
    user: '',
    password: '',
    multipleStatements: true
}).promise();

export default pool