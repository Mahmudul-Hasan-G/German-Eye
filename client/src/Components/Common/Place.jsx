/* eslint-disable react/prop-types */




const Place = ({ place }) => {
    console.log(place);
    const { city, address, zipCode, placeName, image } = place || {};
    return (
        <div>
            <img width="20%" src={`${image}`} />
            <h1>{image}</h1>
            <h1>{city}</h1>
            <h1>{address}</h1>
            <h1>{zipCode}</h1>
            <h1>{placeName}</h1>
        </div>
    );
};

export default Place;