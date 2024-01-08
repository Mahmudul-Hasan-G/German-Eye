/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { useAuth } from '../Common/authContext.jsx';
import Swal from 'sweetalert2';
import { useEffect, useState } from "react";
import axios from "axios";


const Place = ({ place }) => {
    const [sCity, setScity] = useState({});
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const { _id } = place || {};


    useEffect(() => {
        checkLikes();
    }, [])

    const checkLikes = async () => {
        try {
            const response = await axios.get('http://localhost:5000/placeByIdG', { params: { _id } });
            setScity(response.data);
        } catch (err) {
            console.log(err.message);
        }
    }


    const { city, image, address, likes } = sCity;


    const handelButton = () => {
        if (isLoggedIn) {
            navigate('/place-detail', { state: { sCity } })
        }
        else {
            Swal.fire({
                title: "To see the detail You have to signIn",
                showClass: {
                    popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                    popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }

            });
            navigate('/signin');
        }

    }
    return (
        <div className="mt-6">
            <div className="card w-full bg-base-100 shadow-xl items-center">
                <h2 className="card-title text-3xl">{city}</h2>
                <figure className="px-6 pt-6">
                    <img src={image} alt="Shoes" className="rounded-xl h-96 w-96" />
                </figure>
                <div className="card-body items-center text-center text-2xl">
                    <p>{likes?.length} people liked this place</p>
                    <p>{address}</p>
                    <div className="card-actions mt-6">
                        <button onClick={handelButton} className="btn btn-accent text-2xl">To know more</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Place;