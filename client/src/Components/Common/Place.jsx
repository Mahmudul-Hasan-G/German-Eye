/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";




const Place = ({ place }) => {
    const navigate = useNavigate();
    const { city, address, image } = place || {};

    const handelButton = () => {
        navigate('/place-detail', { state: { place } })
        console.log(place);
    }
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="w-48 h-40" src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{city}</h2>
                <p>{address}</p>
                <div className="card-actions">
                    <button onClick={handelButton} className="btn btn-primary">To Know more</button>
                </div>
            </div>
        </div>
    );
};

export default Place;