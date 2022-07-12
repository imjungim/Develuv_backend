// Overloper local DB 테스트
const mysql = require('mysql2');
require("dotenv").config();

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  multipleStatements: true,
  database: 'KOSTADB'
});

con.connect((err) => {
  if(err) {
    console.log(err);
  }
  console.log('===== RDS CONNECT =====')
});

module.exports = con;