const express = require('express');
const router = express.Router();
const con = require('../DB/mysql');

router.post("/", (req, res) => {
    const {onoff ,type ,title ,end_date ,content ,ticket ,img ,address ,end_time} = req.body
    const par = Object.values(req.body)
    const sql = `INSERT INTO event_table (onoff ,type ,title ,end_date ,content ,ticket ,img ,address ,end_time) VALUES (?,?)`
    con.query(sql,'',(err,rows,fields)=>{
      if(err) throw err
      console.log('event_table 등록 완료')
    })
  });


module.exports = router;