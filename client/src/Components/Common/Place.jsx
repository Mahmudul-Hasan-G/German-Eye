/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { useAuth } from '../Common/authContext.jsx';
import Swal from 'sweetalert2';


const Place = ({ place }) => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const { city, address, image } = place || {};

    const handelButton = () => {
        if (isLoggedIn) {
            navigate('/place-detail', { state: { place } })
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

        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="w-48 h-40" src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{city}</h2>
                <p>{address}</p>
                <div className="card-actions">
                    <button onClick={handelButton} className="btn btn-accent">To Know more</button>
                </div>
            </div>

        </div>
    );
};

export default Place;