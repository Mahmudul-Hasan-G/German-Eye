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

        <div className="card w-full bg-base-100 shadow-xl items-center">
            <h2 className="card-title text-3xl">{city}</h2>
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl h-96 w-96" />
            </figure>
            <div className="card-body items-center text-center">

                <p>{address}</p>
                <div className="card-actions">
                    <button onClick={handelButton} className="btn btn-accent">To know more</button>
                </div>
            </div>
        </div>


    );
};

export default Place;