const express = require('express');
const router = express.Router();
const con = require('../DB/mysql');

router.get("/:id", (req, res) => {
    const eventID = req.params.id
    const sql = `SELECT * FROM event_table WHERE board_key = "${eventID}"` 
    con.query(sql,(err, rows, fields) => {
        if (err) throw err
        res.send(rows)
        console.log('eventInfo 전송완료')
    })
});


module.exports = router;