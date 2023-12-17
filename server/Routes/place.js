import express from "express";
import Place from "../Model/PlaceSchema.js";



const router = express.Router();


router.post('/insert', async (req, res) => {

    const { userName, city, address, zipCode, image, placeName, description } = req.body;


    try {
        console.log(req.body);
        const place = new Place({ userName, city, address, zipCode, image, placeName, description });

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

export default router;

