import express from 'express';
import User from '../Model/UserSchema.js';
import bcrypt from 'bcrypt';

import jwt from 'jsonwebtoken';



const router = express.Router();

router.post('/signin', async (req, res) => {


    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.json("User not found");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json("Password is not correct");
        }

        else {

            const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '24h' });
            console.log(token);
            res.status(200).json({ message: "User is Signed in", token });
        }

    }
    catch (err) {

        res.json(err.message);
    }

})


export default router;