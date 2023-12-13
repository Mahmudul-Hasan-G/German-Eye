import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
    userName:{
        type: String
    },
    city: {
        type: String
    },
    address: {
        type: String
    },
    zipCode: {
        type: String
    },
    image: {
        type: String
    },
    placeName: {
        type: String
    },
    description: {
        type: String
    },
});

const Place = mongoose.model('Place', placeSchema);

export default Place;
