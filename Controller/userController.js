const userModel = require('../models/userModel');
require("dotenv").config();
const JWT = require("jsonwebtoken");
const createUser = async(req,res) =>{
    try{
        const {name,email,password} = req.body;
        // console.log(req.body);
        const newUser =  await userModel.createUser(name,email,password);
        res.status(201).json(newUser);

    }catch(error)
    {
        res.status(500).json({error: error.message});
    }
}


const login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await userModel.loginUser(email,password);
        
        if(!user){
            res.status(400).json({error: "Invalid credentials"});
        }

        //Create JWT Token
        const token = JWT.sign(
            {email: user.email},
            process.env.SECRET,
            {expiresIn: "7h"}
        );

        res.status(200).header("Authorization", `Bearer ${token}`)
        .json({
            token,
            user:{
                name: user.name,
                email: user.email,
                userId: user._id
            }
        });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
   
};

const getUserProfile = async (req,res) =>{
    const email = req.email;
    const user = await userModel.getUser(email);
    res.json({
        name:user.name,
        email:user.email
    });
}

module.exports = {
    createUser,
    login,
    getUserProfile
};