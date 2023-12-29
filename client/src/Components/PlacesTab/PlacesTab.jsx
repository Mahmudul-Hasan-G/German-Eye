/* eslint-disable react/prop-types */
import { useAuth } from "../Common/authContext";
import Place from "../Common/Place";


const PlacesTab = ({ sItem }) => {
  console.log(sItem);
  const { allPlaces } = useAuth();
  console.log(allPlaces);
  if (sItem) {
    const places = allPlaces.filter(item => item.placeName.toLowerCase() === sItem.toLowerCase());

    return (
      <div>
        <div className="grid grid-cols-3  gap-4">
          {
            places.map(place => <Place
              key={place._id}
              place={place}
            />)
          }
        </div>
      </div>
    );
  }
  else {
    return (
      <div>
        <div className="grid grid-cols-3  gap-4">
          {
            allPlaces.map(place => <Place
              key={place._id}
              place={place}
            />)
          }
        </div>
      </div>
    );
  }



};

export default PlacesTab;