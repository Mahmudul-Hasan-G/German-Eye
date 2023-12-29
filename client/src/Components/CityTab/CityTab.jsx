import { useAuth } from "../Common/authContext";
import Place from "../Common/Place";


const CityTab = ({sItem}) => {
  console.log(sItem);
  const {selPlaces} = useAuth();
  console.log(selPlaces);
const places = selPlaces.filter(item => item.placeName.toLowerCase() === sItem.toLowerCase());
console.log(sItem);

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
};

export default CityTab;