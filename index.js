const express = require('express');
const cors = require('cors');
const connectToDb = require('./db');
const userRoutes = require('./Routes/userRequest');
// const postRoutes = require('./Routes/postsRequest');
require("dotenv").config();
const port = process.env.PORT;

const app = express();
app.use(express.json());
connectToDb();
app.use(cors());
//listen to the server

app.use('/',userRoutes);
app.use('/',userRoutes);
// app.use('/posts',postRoutes);


app.listen(port, ()=>{
    console.log("Listening to port 5000");
})