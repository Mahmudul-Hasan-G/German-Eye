import { useEffect, useState } from "react";
import Place from "../Common/Place.jsx";
import axios from "axios";


const Places = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/places');
                console.log(response.data);
                setPlaces(response.data);

            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();

    }, []);


    return (
        <div>
            <h1>{places.length}</h1>
            {
                places.map(place => <Place
                    key={place._id}
                    place={place}
                />)
            }
        </div>
    );
};

export default Places;