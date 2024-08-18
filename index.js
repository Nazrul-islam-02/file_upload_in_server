const express = require('express');
const multer = require('multer');
const app = express();
const port = 3001;


const storage = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,"uploads/");
  },
  filename:function(req,file,cb){
   const name = Date.now()+ "_"+ file.originalname;
   cb(null,name);
  },
});
const upload = multer({storage:storage});




app.get("/",(req,res)=>{
  res.send('thid is home page');
})

app.get("/register",(req,res)=>{
  res.sendFile(__dirname +"/views/index.html");
})
app.post("/register",upload.single('image'),(req,res)=>{
  res.send("save done");
})

app.listen(port,()=>{
  console.log(`server is runnig at http://localhost:${port}`);
})
 