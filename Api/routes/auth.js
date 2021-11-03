const express=require('express');
const router=express.Router();
const User=require('../models/User');


//ROUTE:1    create a user using POST "/api/auth"
router.get('/',async (req,res)=>{
   
    const user= await User(req.body);
    user.save(()=>{});
     console.log(req.body);
    res.json(req.body);
})



module.exports=router;