const express = require('express');
const router = express.Router();

router.get('/shop',(req,res)=>{
    res.send('<h1>shop page</h1>');
})
module.exports = router;