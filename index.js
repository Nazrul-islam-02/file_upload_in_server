const express = require('express');
const userRouter = require("./route/fileupload.route");
const app = express();
const port = 3001;
app.use(express.static('uploads'));
app.use("/",userRouter);


app.listen(port,()=>{
  console.log(`server is runnig at http://localhost:${port}`);
})
 