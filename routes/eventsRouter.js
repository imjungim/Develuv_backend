const { application } = require("express");
const express = require("express");
const router = express.Router();
const con = require("../DB/mysql");

router.get("/", (req, res) => {
  const sqlQuery = "SELECT * FROM event_table";
  console.log(sqlQuery)
  con.query(sqlQuery, (err, result) => {
    res.send(result);
    //console.log(result);
  });

});


module.exports = router;