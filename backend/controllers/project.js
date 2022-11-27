import projectModel from '../models/project.js'

export default {
    get : async (req, res) => {
        try{
            const data = await projectModel.find();
            res.json(data)
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    },
    post : async (req, res) => {
        const tempStart = new Date(req.body.start_date);
        const tempEnd = new Date(req.body.end_date);
    
        const data = new projectModel({
            name: req.body.name,
            description: req.body.description,
            status: req.body.status,
            task_number: 0,
            task_complete: 0,
            total_cost: 0,
            start_date: tempStart,
            end_date: tempEnd,
            completed_date: null
        })
    
        try {
            const dataToSave = data.save();
            res.status(200).json(dataToSave)
        }
        catch (error) {
            res.status(400).json({message: error.message})
        }
    },
    patch : async (req, res) => {
        try {
            const id = req.params.id;
            const tempStart = new Date(req.body.start_date);
            const tempEnd = new Date(req.body.end_date);
            
            req.body.start_date = tempStart;
            req.body.end_date = tempEnd;
            
            const updatedData = req.body;
            const options = { new: true };
    
            const result = await projectModel.findByIdAndUpdate(
                id, updatedData, options
            )
    
            res.send(result)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const data = await projectModel.findByIdAndDelete(id)
            res.send(`Document with ${data.name} has been deleted..`)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
}