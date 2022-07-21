const passport = require("passport");
const con = require("../../DB/mysql");
const local = require('../localStrategy');

module.exports = () => {
  console.log(1+1);
  
  passport.serializeUser((user, done) => {
    console.log("serialize User", user);
    done(null, user.ID);
  });
  
  passport.deserializeUser((id, done) => {
    console.log("deserializeUser id", id);
    let userInfo;
    const sql = 'SELECT * FROM user_table where email=?';
    con.query(sql, [id], (err, result) => {
      if (err) console.log(err);
  
      console.log("deserializeUser mysql result : " , result);
      const json  = JSON.stringify(result[0]);
      userInfo = JSON.parse(json);
      done(null, userInfo);
    })
  });
  local();
}