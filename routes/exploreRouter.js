const { application } = require("express");
const express = require("express");
const router = express.Router();
const con = require("../DB/mysql");

// router.get("/", (req, res, next) => {
//   // res.send("Hello 왜 안돼?");
//   console.log("데이터베이스");
//   next();
// });



router.get("/", (req, res) => {
  const sqlQuery = "SELECT * FROM event_table";
  con.query(sqlQuery, (err, result) => {
   res.send(result);
   // console.log(result);
  });
});

// router.get('/',(req, res) => {
//   const sqlQuery = 'use KOSTADB' + 'SELECT * FROM event_table';
//   con.query(sqlQuery, (err, result) => function(err,rows,fields) {
//     if(err){
//       console.log(err);
//     }else{
//       console.log('rows',rows);
//       console.log('fields',fields);
// }});
//   });

module.exports = router;
