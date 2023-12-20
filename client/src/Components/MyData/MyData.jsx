import { useLocation } from "react-router-dom";
import Place from "../Common/Place";



const MyData = () => {

    const location = useLocation();
    const places = location.state.places;
    console.log(places);
    return (
        <div>
            { 
                places.map (place => <Place key={place._id} place={place}/>)
            }
        </div>
    );
};

export default MyData;