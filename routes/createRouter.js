const express = require('express');
const router = express.Router();
const con = require('../DB/mysql');
const multer = require('multer')


const upload = multer({
  storage: multer.diskStorage({
    destination(req,file,done){
      done(null,'./image')
    },
    filename(req,file,done){
      done(null, Date.now() + file.originalname);
    },
  }),
})

router.post('/upload', upload.array('image',2),(req,res,next)=>{
  console.log('이미지 업로드 완료')
})

router.post("/",(req, res) => {
    const par = Object.values(req.body)
    const sql = `INSERT INTO event_table (user_id ,email ,title ,onoff ,type ,end_date ,content ,ticket ,address) VALUES (?,?,?,?,?,?,?,?,?)`
    con.query(sql,par,(err,rows,fields)=>{
      console.log('event_table 등록 완료')
    })
  });



module.exports = router;