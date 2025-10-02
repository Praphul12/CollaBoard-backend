const userModel = require('../models/userModel');

const createUser = async(req,res) =>{
    try{
        const {name,email,password} = req.body;
        const newUser =  await userModel.createUser(name,email,password);
        res.status(201).json(newUser);

    }catch(error)
    {
        res.status(500).json({error: error.message});
    }
}


const login = async(req,res)=>{
    try {
        const {name,email,password} = req.body;
        const users = await userModel.loginUser(name,email,password);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    createUser,
    login
};