
const express = require('express');
const { homepage, getfrom, savefile } = require('../controller/fileupload.controller');
const router = express.Router();
const upload = require('../config/multerConfig');


router.get("/",homepage)
  
  router.get("/register",getfrom)
  router.post("/register",upload.single('image'),savefile)

  module.exports = router;