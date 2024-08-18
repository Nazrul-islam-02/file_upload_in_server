
const path = require('path');
exports.homepage = (req,res)=>{
    res.send('thid is home page');
  };

  exports.getfrom = (req,res)=>{
    res.sendFile(path.join(__dirname + "/../views/index.html"));
  };

  exports.savefile = (req,res)=>{
    res.send("save done");
  };