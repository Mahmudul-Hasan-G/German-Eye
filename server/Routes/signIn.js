import express from 'express';
import User from '../Model/UserSchema.js';

const router = express.Router();

router.post('/signin', async(req, res) => {
    

    const {email,password}= req.body;
    try{
const user= await User.findOne({email});

if(!user){
    return res.json("user not found");
}

//const isMatch= await compare(password, user.password);

if (password!== user.password){
    return res.json("password is not correct");
}

else {
    return res.json("user is logged in");
}

    }
    catch(err){

        res.json(err.message);
    }
    
})


export default router;