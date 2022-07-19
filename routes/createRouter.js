const express = require('express');
const router = express.Router();
const con = require('../DB/mysql');

router.post("/", (req, res) => {
    const par = Object.values(req.body)
    console.log(par)
    const sql = `INSERT INTO event_table (user_id ,email ,title ,img,onoff ,type ,end_date ,content ,ticket ,address) VALUES (?,?,?,?,?,?,?,?,?,?)`
    con.query(sql,par,(err,rows,fields)=>{
      if(err) throw err
      console.log('event_table 등록 완료')
    })
  });


module.exports = router;