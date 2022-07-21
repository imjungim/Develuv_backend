const express = require('express');
const router = express.Router();
const con = require('../DB/mysql')

router.get("/", (req, res, next) => {
  const keyword = req.query.keyword;
  const type = req.query.type;
  // console.log(req.query);
 // res.send(req.query.keyword+','+req.query.type);
  console.log(keyword);
  console.log(type);


  const sqlQuery =`select * from event_table WHERE title LIKE "%${keyword}%" and onoff!=${type}`;
  con.query(sqlQuery, (err, result) => {
    res.send(result);
    //console.log(result);
  });

});


module.exports = router;

