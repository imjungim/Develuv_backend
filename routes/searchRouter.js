const express = require('express');
const router = express.Router();
const con = require('../DB/mysql')

router.get("/", (req, res, next) => {
  res.send("Hello ");
  console.log("Hello");
  next();
});


module.exports = router;