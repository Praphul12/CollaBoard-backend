const express = require('express'); 
const {createUser, login,getUserProfile} = require('../Controller/userController')
const {validateRegister} = require('../Middlewares/validation');
const authorize = require('../Middlewares/authorization');
const router = express.Router();

router.post('/login',(req,res)=>{
    console.log(req.body);
    login(req,res)
});

router.post('/register',validateRegister,(req,res)=>{
    createUser(req,res);
})

router.get('/profile',authorize,getUserProfile)

module.exports = router; 