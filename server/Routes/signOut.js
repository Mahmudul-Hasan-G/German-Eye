import express from 'express';

const router = express.Router();


router.post('/signout', (req, res) => {



    return res.status(200).json({ message: 'SignOut successful' });


});

export default router;