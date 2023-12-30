import express from "express";
import Place from "../Model/PlaceSchema.js";
import CheckJwt from "../Middleware/Checkjwt.js";



const router = express.Router();


router.post('/insert', async (req, res) => {

    const { userName, city, address, zipCode, image, placeName, description } = req.body;


    try {
        console.log(req.body);
        const place = new Place({ userName, city, address, zipCode, image, placeName, description, likes });

        await place.save();


        res.send('success');

    }
    catch (err) {

        res.json(err.message);
    }

})

router.get(('/places'), async (req, res) => {
    try {
        const places = await Place.find();
        res.json(places);
    } catch (err) {
        console.error(err.message);

    }
})

router.get(('/city'), async (req, res) => {
    try {

        const city = req.query.city;
        console.log(city);
        const regexCity = new RegExp(city, 'i');
        const places = await Place.find({ city: { $regex: regexCity } });

        res.json(places);
    } catch (err) {
        console.error(err.message);

    }
})

router.get(('/mydata'), CheckJwt, async (req, res) => {
    try {
        const userName = req.query.username;
        console.log(userName);
        const mydata = await Place.find({
            userName: userName
        });
        res.json(mydata);
        console.log(mydata.length);
    } catch (err) {
        console.error(err.message);
    }
})

router.get(('/placeByIdG'), async (req, res) => {
    try {
        const placeId = req.query._id;
        console.log(placeId);
        const placeDataById = await Place.findById({
            _id: placeId
        });
        if (!placeDataById) {
            res.status(404).json({ message: 'Place not found' });
        }
        // const likedByUser = placeDataById.likes.some(like => like.username === req.query.username);
        // console.log(likedByUser);
        // res.json({ likedByUser });
        console.log(placeDataById.likes.length);
        res.json(placeDataById.likes.length);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post(('/placeById'), async (req, res) => {
    try {
        const placeId = req.body._id;
        console.log(placeId);
        const placeDataById = await Place.findById({
            _id: placeId
        });
        if (!placeDataById) {
            res.status(404).json({ message: 'Place not found' });
        }
        const likedByUser = placeDataById.likes.some(like => like.username === req.query.username);
        if (!likedByUser) {
            placeDataById.likes.push({ username: req.body.username });
            await placeDataById.save();
            res.status(201).json({ message: 'Place liked!' });
        }


    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});




export default router;

