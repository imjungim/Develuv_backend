const express = require('express');
const router = express.Router();
const con = require('../DB/mysql');
const bcrybt = require('bcrypt');

router.get('/', (req, res) => {
  console.log('login!');
});

router.post('/signup/post', async (req, res) => {
  const email = req.body.email.email;
  const name = req.body.nickname.nickname;
  const id = req.body.user_id;
  const pw = req.body.pw.pw;
  const hashed = await bcrybt.hash(pw, 10);

  const sqlInsert = {email: email, nickname: name, user_id: id, pw: hashed}
  con.query('select email from user_table where email=?', [email], (err, rows) => {
    if(rows.length) {
      res.json({'result':'fail'})
    } else {
      con.query('insert into user_table set?', sqlInsert, (err, rows) => {
        if(err) throw err;
        console.log('ok');
        res.json({'result':'ok'});
      })
    }
  })
});

module.exports = router;