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
    post : (req, res) => {
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