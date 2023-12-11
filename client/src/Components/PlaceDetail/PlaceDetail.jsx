import { useLocation } from "react-router-dom";


const PlaceDetail = () => {
    const location = useLocation();
    const { place } = location.state || {};
    const { city, address, zipCode, image, placeName, description } = place || {};

    return (
        <div>
            <div className="card card-compact w-100% bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{city}</h2>
                    <p>{address}</p>
                    <p>{zipCode}</p>
                    <h1>{placeName}</h1>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PlaceDetail;