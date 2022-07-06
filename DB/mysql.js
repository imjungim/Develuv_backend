// Overloper local DB 테스트
const mysql = require('mysql2');
const PORT = 3308;

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: PORT,
  password: 'sad123',
  multipleStatements: true
});

con.connect((err) => {
  if(err) {
    throw err;
  }
  console.log('DB연결 성공')
});

module.exports = con;