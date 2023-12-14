import { useLocation } from "react-router-dom";
import Place from "../Common/Place";


const SelectedCity = () => {
    const location = useLocation();
    const places = location.state.places;
    console.log(places);
    return (
        <div className="grid grid-cols-5 gap-4 my-12">
            <div></div>
        <div className="grid grid-cols-3 col-span-3 gap-4">
            {
                places.map(place => <Place
                key = {place._id}
                place={place}
                 />)
            }
        </div>
        <div></div>
        </div>
    );
};

export default SelectedCity;