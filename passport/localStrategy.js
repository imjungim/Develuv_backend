const passport = require("passport");
const con = require("../DB/mysql");
const LocalStrategy = require("passport-local").Strategy;

module.exports = () => {
  console.log('===================local=====================')
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'pw',
    session: true,
    passReqToCallback: true
  }, (email, pw, done) => {
    const sql = 'SELECT * FROM KOSTADB.user_table WHERE email=?';
    con.query(sql, [email], (err, result) => {
      console.log('adsfasdfadfadsffadf')
      if(err) console.log('mysql error');

      if(result.length === 0) {
        console.log("NO RESULT");
        return done(null, false, {message:'Incorrect'});
      } else {
        console.log(result);
        const json = JSON.stringify(result[0]);
        const userInfo = JSON.parse(json);
        console.log("userinfo : " + userInfo);
        return done(null, userInfo)
      }
    })
  }))
}