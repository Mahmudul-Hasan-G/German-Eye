/* eslint-disable react/prop-types */




const Place = ({ place }) => {
    console.log(place);
    const { city, address, zipCode, placeName, image } = place || {};
    return (
        <div>
            <div className="flex space-x-4 card lg:card-side bg-base-100 shadow-xl w-80">
  <figure className="w-full">
    <img className="w-40 h-48" src={image} alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{city}</h2>
    <p>{address}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Bio!</button>
    </div>
  </div>
  </div>
        </div>
    );
};

export default Place;