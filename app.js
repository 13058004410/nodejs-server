const express=require('express');
const bodyParser=require('body-parser');
const luyou=require('./routes/luyou.js');

var app=express();

app.listen(8080);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended:false
}));

app.use('/luyou',luyou);