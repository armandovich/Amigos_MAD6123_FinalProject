import url from 'url';
import bcrypt from 'bcrypt';
import userModel from '../models/user.js';

const salt = bcrypt.genSaltSync(10);

export default {
    get : async (req, res) => {
        const queryString = url.parse(req.url, true).query;

        try{
            if(queryString) {
                const user = await userModel.find( { email: queryString.email }) ;
                
                if (user && bcrypt.compareSync(queryString.password, user.password)) {
                    res.json(user)
                } else {
                    throw new Error('User not found.');
                }
            } else {
                throw new Error('User not found.');
            }
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    },
    post : async (req, res) => {
        const hash = bcrypt.hashSync(req.body.password, salt);

        const data = new userModel({
            name: req.body.name,
            email: req.body.email,
            password: hash,
            admin: false
        })
    
        try {
            const user = await userModel.find( { email: req.body.email });

            if (user) {
                throw new Error('Email has been used.');
            } else {
                const dataToSave = data.save();
                res.status(200).json(dataToSave)
            }
        }
        catch (error) {
            res.status(400).json({message: error.message})
        }
    }
}