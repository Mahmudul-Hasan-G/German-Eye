import express from 'express';
import User from '../Model/UserSchema.js';

const router = express.Router();

router.post('/signup', async(req, res) => {
    

    const {name, email, password, city}= req.body;
    try{
const user= new User({name, email, password, city});

await user.save();
    }
    catch(err){

        res.json(err.message);
    }
    res.json(req.body);
})


export default router;