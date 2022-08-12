const passport = require("passport");
const bcrybt = require("bcrypt");
const con = require("../DB/mysql");
const LocalStrategy = require("passport-local").Strategy;

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "pw",
      },
      (email, pw, done) => {
        const hash = bcrybt.hashSync(pw, 10);
        const sql = "SELECT * FROM KOSTADB.user_table WHERE email=?";
        con.query(sql, [email], (err, result) => {
          if (err) {
            console.log("mysql error");
          }
          if (result.length === 0) {
            console.log("NO RESULT");
            return done(null, false, { message: "Incorrect" });
          } else {
            const sql = "SELECT pw FROM KOSTADB.user_table where email=?";
            con.query(sql, [email], (err, result) => {
              if (err) {
                console.log("mysql error");
              }
              else {
                const match = bcrybt.compareSync(pw, hash);
                if (match) {
                  console.log("pw : ", result[0].pw);
                  const json = JSON.stringify(result[0]);
                  const userInfo = JSON.parse(json);
                  console.log("userinfo : " + userInfo);
                  return done(null, userInfo);
                } else {
                  console.log('비밀번호가 다르다.');
                }
              }
            });
          }
        });
      }
    )
  );
};
