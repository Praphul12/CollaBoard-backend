const express = require('express');

const {getAllCanvas,createCanvas,deleteCanvas,updateCanvas,getCanvas,shareCanvas} = require('../Controller/canvasController');
const authenticationMiddleware = require('../Middlewares/authorization');
const router = express.Router();


//Get all the canvases for the user
router.get('/',authenticationMiddleware,getAllCanvas);
router.post('/create',authenticationMiddleware,createCanvas);
router.post('/delete',authenticationMiddleware,deleteCanvas);
router.put('/update',authenticationMiddleware,updateCanvas);
router.get("/:id",authenticationMiddleware,getCanvas);
router.post("/share/:id",authenticationMiddleware,shareCanvas);
module.exports = router;