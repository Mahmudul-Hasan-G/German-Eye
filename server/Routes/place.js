import express from "express";
import Place from "../Model/PlaceSchema.js";



const router = express.Router();


router.post('/insert', async (req, res) => {

    const { city, address, zipCode, image, placeName, description } = req.body;


    try {
        console.log(req.body);
        const place = new Place({ city, address, zipCode, image, placeName, description });

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
        
        const city = req.body.city;
        const places = await Place.find({ city: city });
       
        res.json(places);
    } catch (err) {
        console.error(err.message);

    }
})

export default router;

