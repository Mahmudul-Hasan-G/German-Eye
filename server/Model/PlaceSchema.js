import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
    userName: {
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
    likes: [{
        username: {
            type: String,
            unique: true
        }
    }],
});

const Place = mongoose.model('Place', placeSchema);

export default Place;
