const express = require('express');
const ProjectModel = require('../models/project');

const router = express.Router()

module.exports = router;

router.get('/projects', async (req, res) => {
    try{
        const data = await ProjectModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
