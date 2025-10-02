const express = require('express'); 
const {createUser, login} = require('../Controller/userController')
const {validateRegister} = require('../Middlewares/validation');
const router = express.Router();

router.get('/login',(req,res)=>{
    login(req,res)
});

router.post('/register',validateRegister,(req,res)=>{
    createUser(req,res);
})

module.exports = router; 