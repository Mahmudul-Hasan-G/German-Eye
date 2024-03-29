import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../Common/authContext.jsx';
import { useEffect, useState } from "react";
import axios from "axios";


const PlaceDetail = () => {
    const { loggedUserName } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const { sCity } = location.state || {};
    const { _id, city, address, zipCode, image, placeName, description, likes } = sCity || {};
    const [isLiked, setIsLiked] = useState(false);
    const { nLikes, setNLikes } = useAuth();

    console.log(_id);
    console.log(loggedUserName);
    useEffect(() => {
        checkIfLiked();
    }, []);


    const checkIfLiked = async () => {
        if (likes === null) {
            setNLikes(0)
        } else {
            const response = likes.some(like => like.username === loggedUserName);
            setNLikes(likes.length)
            setIsLiked(response);
        }
    };

    const handleLikes = async () => {
        try {
            if (isLiked === false) {
                setIsLiked(true);
                const response = await axios.post('https://german-eye-backend.onrender.com/placeById', { loggedUserName, _id });

                console.log(response);
                setNLikes(response.data);


            } else {
                console.log('Already liked!');
            }
        } catch (error) {
            console.error('Error handling like:', error);
        }
    };


    const handleClick = () => {
        navigate(-1);
    }


    return (
        <div className="bg-red-500">

            <div className="px-6 pt-20 pb-6">
                <div className="bg-white lg:grid grid-cols-2 gap-4 justify-items-center px-6 py-6">
                    <div className="w-full">
                        <h2 className="text-6xl">{city}</h2>
                        <div className="text-2xl my-4">
                            <p>{address}, {zipCode}</p>
                            <h1>{placeName}</h1>
                        </div>
                        <p className="text-3xl">{description}</p>
                        <div className="flex justify-center gap-6 mt-4">
                            <button onClick={handleLikes} disabled={isLiked} className="btn btn-accent px-10">Like ({nLikes})</button>
                            <button onClick={handleClick} className="btn btn-accent px-10">Go back</button>
                        </div>

                    </div>
                    <div className="">
                        <img src={image} alt="Photo" />
                    </div>
                </div>


            </div>



        </div>
    );
};

export default PlaceDetail;




