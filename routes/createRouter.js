const express = require('express');
const router = express.Router();
const con = require('../DB/mysql');
const multer = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'image/');
  },
  // filename: function (req, file, cb) {
  //   cb(null, `_${file.originalname}`);
  // },
});
let imageID 
var upload = multer({ storage: storage })
 
router.post('/upload', upload.array("image",2),(req,res,next)=>{
  console.log('이미지 업로드 완료')
  if(req.files){
    imageID = `${req.files[0].filename}.${req.files[1].filename}`
    console.log(imageID)
    res.send(imageID)
  }
  // res.send(res.req.files)
})

router.post("/",(req, res) => {
    const par = Object.values(req.body)
    console.log(par)
    const sql = `INSERT INTO event_table (user_id ,title ,onoff ,type ,start_date,end_date ,content ,ticket ,address,image_id) VALUES (?,?,?,?,?,?,?,?,?,?)`
    con.query(sql,par,(err,rows,fields)=>{
      if(err) throw err
      console.log('event_table 등록 완료')
      res.send('ok')
    })
  });



module.exports = router;