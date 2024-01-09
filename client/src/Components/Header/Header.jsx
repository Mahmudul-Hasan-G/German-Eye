import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAuth } from '../Common/authContext.jsx';
import Swal from 'sweetalert2';


const Header = () => {
  const { allPlaces, setAllPlaces } = useAuth();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { username } = useAuth();


  const handleAllData = async () => {

    try {
      const response = await axios.get('http://localhost:5000/places');
 
      setAllPlaces(response.data);
      navigate('/places');
    } catch (error) {
      console.error(error.message);
    }

  }

  const handleMyData = async () => {

    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/mydata', { params: { username }, headers: { Authorization: token }, });
      console.log(response);
      if (response.data.length != 0) {
        setAllPlaces(response.data);

        console.log(allPlaces);

        navigate('/places');
        console.log(response.data);
      }
      else {
        Swal.fire({
          title: `Sorry you did not share any data yet!`,
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
            <label tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/'>Home</Link></li>
              <li>
                <Link onClick={handleAllData} >Places</Link>

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
          <div className="flex items-center ">
            <img className="lg:w-20 w-10" src="vite.svg" alt="" />
            <p className="lg:ml-4 lg:text-5xl" ><span style={{ fontFamily: "'Black Ops One', 'Bungee Shade', cursive", color: '#000000' }}>GER</span><span style={{ fontFamily: "'Black Ops One', 'Bungee Shade', cursive", color: '#FF0000' }}>MAN</span>  <span style={{ fontFamily: "'Black Ops One', 'Bungee Shade', cursive", color: '#FFCC00' }}>EYE</span></p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="text-2xl font-bold menu menu-horizontal px-1">
            <li><Link to='/'>Home</Link></li>
            <li tabIndex={0}>


              <Link onClick={handleAllData} >Places</Link>


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
              <button onClick={handleSignOut} className="btn font-bold btn-accent">Sign out</button>
            </>
          ) : (
            <Link to='signin' className="btn font-bold btn-accent">Sign in!</Link>
          )}
        </div>
      </div>



    </>
  );
};

export default Header;