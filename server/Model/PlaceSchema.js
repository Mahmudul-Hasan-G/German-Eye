import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    placeName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    likes: [{
        username: {
            type: String,
            unique: true
        }
    }],
});

const Place = mongoose.model('Place', placeSchema);

export default Place;
