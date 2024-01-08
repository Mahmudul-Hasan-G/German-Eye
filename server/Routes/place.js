import express from "express";
import Place from "../Model/PlaceSchema.js";
import CheckJwt from "../Middleware/Checkjwt.js";



const router = express.Router();


router.post('/insert', async (req, res) => {

    const { userName, city, address, zipCode, image, placeName, description, likes } = req.body;


    try {
        console.log(req.body.city);
        const place = new Place({ userName, city, address, zipCode, image, placeName, description, likes });

        const result = await place.save();

        console.log(result);
        res.json(result);

    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
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
        const userName = req.query.loggedUserName;
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
        console.log(placeDataById.likes.length);
        if (!placeDataById) {
            res.status(404).json({ message: 'Place not found' });
        }

        res.json(placeDataById);


    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post(('/placeById'), async (req, res) => {
    try {
        const placeId = req.body._id;
        const username = req.body.loggedUserName;
        console.log(placeId, username);
        console.log(req.body);
        const placeDataById = await Place.findById({
            _id: placeId
        });
        console.log(placeDataById.likes.length);
        const userLiked = placeDataById.likes.some(like => like.username === username);
        console.log(userLiked);
        if (placeDataById) {

            const userLiked = placeDataById.likes.some(like => like.userLiked === username);
            if (!userLiked) {
                placeDataById.likes.push({ userLiked: username });
                await placeDataById.save();
                console.log('Like added successfully!');
                res.json(placeDataById.likes.length);
            } else {
                console.log('User already liked this place.');

            }

        }
        else {
            res.status(404).json({ message: 'Place not found' });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});




export default router;

