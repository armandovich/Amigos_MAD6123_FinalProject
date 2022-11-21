import express from 'express'
import projectModel from '../models/project.js'

const router = express.Router()

router.get('/project', async (req, res) => {
    try{
        const data = await projectModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/project', (req, res) => {
    const tempStart = new Date(req.body.start_date);
    const tempEnd = new Date(req.body.end_date);

    const data = new projectModel({
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
        total_cost: req.body.total_cost,
        task_number: req.body.task_number,
        start_date: tempStart,
        end_date: tempEnd
    })

    try {
        const dataToSave = data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

export default router