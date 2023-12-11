import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useAuth } from '../Common/authContext.jsx';


const SignIn = () => {
  const navigate = useNavigate();

  const { setIsLoggedIn } = useAuth();


  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    try {
      const response = await axios.post('http://localhost:5000/signin', { email, password });
      const { data } = response;
      const token = data.token;
      localStorage.setItem('token', token);
      console.log(data);
      Swal.fire({
        title: data.message,
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
      if (data.message === "User is logged in") {
        setIsLoggedIn(true);
        navigate('/');
      }


    }
    catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Hi to participate more LOGIN now</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                <div>
                  <p>{ }</p>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>If it`s your first time, <Link to="/signup">Sign Up!</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;