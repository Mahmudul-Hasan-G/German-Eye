import express from 'express';
import User from '../Model/UserSchema.js';
import bcrypt from 'bcryptjs';
const router = express.Router();

router.post('/signup', async (req, res) => {


    const { name, email, city, password, cPassword } = req.body;
    try {
        const user = new User({ name, email, city, password, cPassword });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        user.cPassword = await bcrypt.hash(cPassword, salt);

        await user.save();
    }
    catch (err) {

        res.json(err.message);
    }
    res.json(req.body);
})


export default router;