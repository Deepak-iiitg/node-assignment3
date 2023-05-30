const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
const admin = require('./routes/admin');
app.use(admin);
const shop = require('./routes/shope');
app.use(shop);
app.use((req,res)=>{
    res.status(404).send('<h1>page not found</h1>');
})
app.listen(4000);