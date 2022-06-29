const express = require('express');
const app = express();
const PORT = 8081;

app.set("view engine", "html");
app.use(express.json());

app.use(express.static('../Develuv_frontend/develuv-f/build'))

app.get('/', (req, res) => {
  res.sendFile('index.html');
})

app.listen(PORT, () => {
  console.log("서버 접속 성공")
})