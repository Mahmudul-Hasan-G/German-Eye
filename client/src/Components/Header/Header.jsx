import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAuth } from '../Common/authContext.jsx';
import { useState } from "react";


const Header = () => {

  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { username } = useAuth();
  const [myPlaces, setMyPlaces] = useState([]);

  const handleMyData = async () => {

    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/mydata', { params: { username }, headers: { Authorization: token }, });
      console.log(response);
      if (response.data.length != 0) {
        setMyPlaces(response.data);

        console.log(myPlaces);

        navigate('/myData', { state: { places: response.data } });
        console.log(response.data);
      }
    }
    catch (error) {
      console.error('Error in fetching places:', error);
    }
  }


  const handleSignOut = async () => {
    try {

      const response = await axios.post('http://localhost:5000/signout');
      navigate('/');
      if (response.status === 200) {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('Error during logout:', error);

    }
  };
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/'>Home</Link></li>
              <li>
                <Link to='/places'>Places</Link>
              </li>
              {isLoggedIn ? (
                <>
                  <li>

                    <Link to='/library'>Library</Link>
                  </li>
                  <li><Link to='/insert'>Insert</Link></li>
                  <li><button onClick={handleMyData}>My Data</button></li>
                </>
              ) : (
                <></>
              )}
            </ul>
          </div>
          <img className="w-20" src="vite.svg" alt="" />
          <p className="ml-4 text-5xl" ><span style={{ fontFamily: "'Black Ops One', 'Bungee Shade', cursive", color: '#000000' }}>GER</span><span style={{ fontFamily: "'Black Ops One', 'Bungee Shade', cursive", color: '#FF0000' }}>MAN</span>  <span style={{ fontFamily: "'Black Ops One', 'Bungee Shade', cursive", color: '#FFCC00' }}>EYE</span></p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="text-2xl font-bold menu menu-horizontal px-1">
            <li><Link to='/'>Home</Link></li>
            <li tabIndex={0}>


              <Link to='/places'>Places</Link>

            </li>
            {isLoggedIn ? (
              <>
                <li>

                  <Link to='/library'>Library</Link>
                </li>
                <li><Link to='/insert'>Insert</Link></li>
                <li><button onClick={handleMyData}>My Data</button></li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {isLoggedIn ? (
            <>
              <button onClick={handleSignOut} className="btn font-bold">Sign out</button>
            </>
          ) : (
            <Link to='signin' className="btn font-bold">Sign in!</Link>
          )}
        </div>
      </div>



    </>
  );
};

export default Header;