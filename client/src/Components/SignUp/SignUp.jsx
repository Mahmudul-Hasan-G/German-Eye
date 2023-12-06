import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'

const SignUp = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    city: '',
    password: '',
    cPassword: ''
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    try {
      const response = await axios.post('http://localhost:5000/signup', user);

      console.log('User signed up successfully:', response.data);

      setUser({
        name: '',
        email: '',
        city: '',
        password: '',
        cPassword: ''
      });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your data is saved",
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {

      console.error('Error signing up:', error.response.data);
    }
  };


  const handleChange = (e) => {
    console.log(e);

    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Sign Up with Us!</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username:
              </label>
              <input
                className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email:
              </label>
              <input
                className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cityName">
                City:
              </label>
              <input
                className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                name="city"
                value={user.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password:
              </label>
              <input
                className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password:
              </label>
              <input
                className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="password"
                name="cPassword"
                value={user.cPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button
              className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;