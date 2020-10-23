const express=require('express');
const pool=require('../pool.js');

var router=express.Router();

router.get('/huoqu',function(req,res){
    pool.query('select*from news',function(err,result){
        // console.log(result);
        res.send(result);
    });
});

module.exports=router;