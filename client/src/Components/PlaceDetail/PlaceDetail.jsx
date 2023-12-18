import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const PlaceDetail = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { place } = location.state || {};
    const { city, address, zipCode, image, placeName, description } = place || {};

    const handleClick = () => {
        navigate(-1);
    }

    return (
        <div className="bg-red-500 my-0 mx-0">
            <div className="">
            <div className="bg-white grid grid-cols-2 gap-4 justify-items-center mt-20 mx-6 mb-6 ">
                <div className="">
                    <h2 className="text-3xl">{city}</h2>
                    <p>{address}</p>
                    <p>{zipCode}</p>
                    <h1>{placeName}</h1>
                    <p>{description}</p>
                        <button onClick={handleClick} className="btn btn-accent px-10">Go back</button>
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




