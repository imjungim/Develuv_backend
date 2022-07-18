const { application } = require("express");
const express = require("express");
const router = express.Router();
const con = require("../DB/mysql");

//http://localhost:3000/search?keyword=검색&type=온라인

router.get("/", (req, res) => {
  const keyword = req.params('keyword');
  const type = req.params('type');

  res.send("User Name : " + u_name + " / User Age : " + u_age);

  // const sqlQuery = "SELECT * FROM event_table";
  // console.log(sqlQuery)
  // con.query(sqlQuery, (err, result) => {
  //   res.send(result);
  //   console.log(result);
  // });

});



module.exports = router;

