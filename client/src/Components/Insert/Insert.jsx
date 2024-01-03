import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from '../Common/authContext.jsx';


const Insert = () => {
  const { username } = useAuth();
  const navigate = useNavigate();

  const [place, setPlace] = useState({
    userName: '',
    city: '',
    address: '',
    zipCode: '',
    image: null,
    placeName: '',
    description: '',
    likes: []
  });



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(place);
      const response = await axios.post('http://localhost:5000/insert', place);
      console.log(response);
      if (response) {
        await Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/');
      }

    } catch (error) {
      console.error(error.message);
    }


  };

  const handleInputChange = (e) => {
    setPlace({
      ...place,
      userName: username,
      [e.target.name]: e.target.value,
    });

  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const base64Image = await convertToBase64(file);

    setPlace({
      ...place,
      image: base64Image,
    });

  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };




  return (

    <div className='bg-cover' style={{ backgroundImage: `url(/images/a2.jpg)` }}>

      <div className='flex justify-center'>
        <h1 className="text-center text-4xl font-bold mb-6 text-red-500 border-b-2 border-yellow-500 rounded-full px-4 py-4 mt-4">
          Where are we right now?
        </h1>
      </div>
      <form className='flex justify-center' onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center h-screen border rounded shadow-lg p-6 w-2/3 mb-8 bg-base-200">
          <div className="container mx-auto p-4">

            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">City</h3>
              <input
                className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                list="cityOptions"
                name="city"
                value={place.city}
                onChange={handleInputChange}
                placeholder="Enter name of the city you're visiting"
              />
              <datalist id="cityOptions">
                <option value="Berlin" />
                <option value="Duisburg" />
                <option value="Stuttgart" />
                <option value="Munich" />
                <option value="Frankfurt" />
                <option value="Cologne" />
                <option value="Hamburg" />
                <option value="Leipzig" />
                <option value="Nuremberg" />
                <option value="Bremen" />
                <option value="Hanover" />
                <option value="Mannheim" />
              </datalist>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">Address</h3>
              <input
                className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                name="address"
                value={place.address}
                onChange={handleInputChange}
                placeholder="Enter the full address"
              />
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">Zip Code</h3>
              <input
                className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                name="zipCode"
                value={place.zipCode}
                onChange={handleInputChange}
                placeholder="Enter zip code"
              />
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">Image</h3>
              <input
                className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="file"
                accept="*"
                onChange={handleImageUpload}
              />
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">Name of the place</h3>
              <input
                className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                list="placeOptions"
                name="placeName"
                value={place.placeName}
                onChange={handleInputChange}
                placeholder="what place are you in"
              />
              <datalist id="placeOptions">
                <option value="Park" />
                <option value="Museum" />
                <option value="Cafeteria" />
                <option value="Restaurant" />
                <option value="Mall" />
              </datalist>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">Description Area</h3>
              <input
                className="w-full px-3 py-16 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                name="description"
                value={place.description}
                onChange={handleInputChange}
                placeholder="Describe what we are seeing"
              />
            </div>


          </div>

          <button
            className="btn btn-accent font-bold text-xl py-3 px-8 rounded mt-4 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Insert
          </button>
        </div>
      </form>

    </div>
  );
};

export default Insert;