const express = require("express");
const router = express.Router();
const con = require("../DB/mysql");
const bcrybt = require("bcrypt");
const passport = require("passport");

router.post("/signup/post", async (req, res) => {
  const email = req.body.email.email;
  const name = req.body.nickname.nickname;
  const id = req.body.user_id;
  const pw = req.body.pw.pw;
  const hashed = await bcrybt.hash(pw, 10);

  const sqlInsert = { email: email, nickname: name, user_id: id, pw: hashed };
  con.query(
    "select email from user_table where email=?",
    [email],
    (err, rows) => {
      if (rows.length) {
        res.json({ result: "fail" });
      } else {
        con.query("insert into user_table set?", sqlInsert, (err, rows) => {
          if (err) throw err;
          console.log("ok");
          res.json({ result: "ok" });
        });
      }
    }
  );
});

// passport local 전략
router.post(
  "/post",
  (req, res, next) => {
    passport.authenticate("local", {
      session: false,
    })(req, res, next);
  },
  (req, res) => {
    // console.log("pass");
    // console.log(req.session);
    console.log("됨?", req.user);
    if (req.user) {
      // res.send(req.user)
      const user = { email: req.user.email, nickname: req.user.nickname };
      res.send(user);
    }
  }
);

module.exports = router;
