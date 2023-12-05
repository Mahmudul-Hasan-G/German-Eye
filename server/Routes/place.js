import express from "express";
import Place from "../Model/PlaceSchema.js";
import multer from "multer";


const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/insert', upload.single('image'), async (req, res) => {

    const { city, address, zipCode, placeName, description } = req.body;
    const imagePath = req.file.path;
    console.log('Received POST request to /insert');
    console.log('Received data:', req.body);

    try {
        const place = new Place({ city, address, zipCode, image: imagePath, placeName, description });

        await place.save();
    }
    catch (err) {

        res.json(err.message);
    }
    res.json(req.body);
})

export default router;