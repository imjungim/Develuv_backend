const express = require('express');
const app = express();
const PORT = 8081;
const con = require('./DB/mysql');
const loginRouter = require('./routes/loginRouter');
const indexRouter = require('./routes/indexRouter');

app.set("view engine", "html");
app.use(express.json());

app.use(express.static('../Develuv_frontend/develuv-f/build'))

app.get('/', (req, res) => {
  res.sendFile('index.html');
})

// app.use('/', indexRouter);

app.use('/login', loginRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
  console.log("서버 접속 성공");
})