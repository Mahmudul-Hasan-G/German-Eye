import express from "express";
import Place from "../Model/PlaceSchema.js";
import CheckJwt from "../Middleware/Checkjwt.js";



const router = express.Router();


router.post('/insert', async (req, res) => {

    const { userName, city, address, zipCode, image, placeName, description, likes } = req.body;


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
        const username = req.body.username;
        console.log(placeId, username);
        console.log(req.body);
        const placeDataById = await Place.findById({
            _id: placeId
        });

        if (!placeDataById) {
            res.status(404).json({ message: 'Place not found' });
        }

        if (placeDataById.likes === null) {
            placeDataById.likes = [];
        }
        placeDataById.likes.push({ username: username });
        await placeDataById.save();


        res.json(placeDataById.likes.length);
        console.log(placeDataById.likes.length);


    } catch (error) {

        res.status(500).json({ message: error.message });
    }
});




export default router;

