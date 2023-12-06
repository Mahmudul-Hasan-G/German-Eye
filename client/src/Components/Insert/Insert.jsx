import axios from 'axios';
import { useState } from 'react';

const Insert = () => {

  const [place, setPlace] = useState({
    city: '',
    address: '',
    zipCode: '',
    image: null,
    placeName: '',
    description: '',
  });

  const handleInputChange = (e) => {
    setPlace({
      ...place,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(place);
      await axios.post('http://localhost:5000/insert', place);
    } catch (error) {
      console.error('Error signing up:', error.response.data);
    }
  };


  return (

    <div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center h-screen border rounded shadow-lg p-6">
          <h1 className="text-4xl font-bold mb-6 text-yellow-500 border-b-2 border-red-500 rounded-full px-2 py-1">
            Where are we right now?
          </h1>

          <div className="container mx-auto p-4">
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">City</h3>
              <input
                className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                name="city"
                value={place.city}
                onChange={handleInputChange}
                placeholder="Enter name of the city you're visiting"
              />
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
                name="placeName"
                value={place.placeName}
                onChange={handleInputChange}
                placeholder="what place are you in"
              />
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
            className="bg-red-500 text-white font-bold py-3 px-6 rounded mt-4 focus:outline-none focus:shadow-outline"
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