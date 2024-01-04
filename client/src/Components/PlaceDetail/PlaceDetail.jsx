import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../Common/authContext.jsx';
import { useEffect, useState } from "react";
import axios from "axios";


const PlaceDetail = () => {
    const { username } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const { sCity } = location.state || {};
    const { _id, city, address, zipCode, image, placeName, description, likes } = sCity || {};
    const [isLiked, setIsLiked] = useState(false);
    const { nLikes, setNLikes } = useAuth();

    console.log(_id);
    console.log(username);
    useEffect(() => {
        checkIfLiked();
    }, []);


    const checkIfLiked = async () => {
        if (likes === null) {
            setNLikes(0)
        } else {
            const response = likes.some(like => like.username === username);
            setNLikes(likes.length)
            setIsLiked(response);
        }
    };

    const handleLikes = async () => {
        try {
            if (isLiked === false) {
                setIsLiked(true);
                const response = await axios.post('http://localhost:5000/placeById', { username, _id });


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
                <div className="bg-white grid grid-cols-2 gap-4 justify-items-center px-6 py-6">
                    <div className="grid w-full">
                        <h2 className="text-6xl">{city}</h2>
                        <p>{address}</p>
                        <p>{zipCode}</p>
                        <h1>{placeName}</h1>
                        <p>{description}</p>
                        <div className="flex justify-center gap-6">
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




