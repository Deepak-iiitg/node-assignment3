const express = require('express');
const router = express.Router();

router.get('/admin',(req,res)=>{
    res.send('<h1>admin page</h1>');
})
module.exports = router;