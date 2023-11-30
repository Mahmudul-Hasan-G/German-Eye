import express from 'express';
import User from '../Model/UserSchema.js';

const router = express.Router();

router.post('/signup', async (req, res) => {


    const { name, email, city, password, cPassword } = req.body;
    try {
        const user = new User({ name, email, city, password, cPassword });

        await user.save();
    }
    catch (err) {

        res.json(err.message);
    }
    res.json(req.body);
})


export default router;