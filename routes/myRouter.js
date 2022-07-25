const express = require('express');
const con = require('../DB/mysql');
const router = express.Router();

router.get('/profile/get', (req, res) => {

  const sqlInsert = "Select * from user_table where email = 'test@test.test'";
  con.query(sqlInsert, (err,row) => {
    if (err) {return console.log("err",err)}
    // console.log("login success",row)
    res.send(row)   
  })
});

router.post('/profile/unpost', (req, res) => {
  console.log('post')
  const sqlInsert = "Delete from user_table where email = 'tt@tt'";
  con.query(sqlInsert, (err, row) => {
    if (err) { return console.log(err) }
    res.end();
  })
})

module.exports = router;