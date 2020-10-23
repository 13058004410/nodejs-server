const express=require('express');
const mysql=require('mysql');

var pool=mysql.createPool({
	user:'root',
	password:'root',
	port:'3306',
	host:'127.0.0.1',
	database:'xinwen',
	connectionLimit:20
});

pool.query('select*from news',function(err,result){
	if(err)throw err;
	// console.log(result);
});

module.exports=pool;