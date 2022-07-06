const express = require('express');
const router = express.Router();
const con = require('../DB/mysql')

router.get('/', (req, res) => {
  console.log('login!');
});

router.get('/signup/to', (req, res) => {
  const sqlInsert = 'USE test;' +
  'SELECT * FROM user_table'
  con.query(sqlInsert, (err, result) => {
    res.send(result[1][0]);
    console.log(result[1][0])
  });
});

// router.post('/signup', (req, res) => {
//   const sqlInsert = "INSERT"
// })

// router.get('/signup/to', async(req, res) => {
//   const sqlInsert = 'USE test';
//   con.query()
// })

module.exports = router;