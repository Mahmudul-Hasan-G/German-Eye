/* eslint-disable react/prop-types */
import { useAuth } from "../Common/authContext";
import Place from "../Common/Place";



const PlacesTab = ({ sItem }) => {
  console.log(sItem);
  const { allPlaces } = useAuth();
  console.log(allPlaces);


  const places = allPlaces.filter(item => item.placeName.toLowerCase() === sItem.toLowerCase());
  console.log(places);
  if (places.length != 0) {
    return (
      <div>
        <div className="lg:grid grid-cols-2  gap-4">
          {
            places.map(place => <Place
              key={place._id}
              place={place}
            />)
          }
        </div>
      </div>
    );
  } else {

    return <div>No places available</div>;
  }



};

export default PlacesTab;