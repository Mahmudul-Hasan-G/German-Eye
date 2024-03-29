/* eslint-disable react-hooks/exhaustive-deps */
import Marquee from "react-fast-marquee";
import b1 from '/images/b1.jpg';
import d1 from '/images/d1.avif';
import s1 from '/images/s1.jpg';
import m1 from '/images/m1.jpg';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { useAuth } from "../Common/authContext";
import { useEffect } from "react";



const Home = () => {
  const { allPlaces, setAllPlaces } = useAuth();
  const { adds, setAdds } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    fetch('adds.json')
      .then(res => res.json())
      .then(data => {
        setAdds(data)
        console.log(adds)
      })
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const city = e.target.cityName.value;
    console.log(city.toLowerCase());
    console.log(allPlaces);
    if (city) {
      try {
        const response = await axios.get('https://german-eye-backend.onrender.com/city', { params: { city } })

        console.log(response.data);
        console.log(response.data.length);
        if (response.data.length != 0) {
          setAllPlaces(response.data);
          navigate('/places', { state: city })
          console.log(allPlaces);
        }
        else {
          Swal.fire({
            title: `Sorry still we have no data for ${city} ! Please try another German City Name`,
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
        console.error(error.message);
      }
    }
    else {
      Swal.fire({
        title: `Please Enter A German City Name !`,
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

  return (
    <div>
      <Marquee className="text-white bg-gradient-to-r from-blue-400 to-green-400" speed={90} direction="left" gradient={true} gradientColor={[239, 23, 23]}>
        <h1 className="text-6xl mb-4 p-2">Your Life, Your Memories, Our Place.
        </h1>
      </Marquee>
      <div className="h-screen w-full bg-cover bg-center lg:flex items-center justify-center gap-x-36" style={{ backgroundImage: `url(/images/lake.jpg)` }}>
        <div>
          <div className="max-w-md">
            <h1 className="mb-5 text-cyan-400 text-6xl font-bold">Bring your Journey to US!</h1>
            <p className="mb-5 font-bold text-4xl text-cyan-400">Let us see through your EYES</p>

            <form onSubmit={handleSubmit}>
              <select type="text" name="cityName" placeholder="Write the City Name " className="input input-bordered input-accent w-full max-w-xs mb-4" >

                <option value="">Select city</option>
                <option value="Berlin">Berlin</option>
                <option value="Duisburg">Duisburg</option>
                <option value="Stuttgart">Stuttgart</option>
                <option value="Munich">Munich</option>
                <option value="Frankfurt">Frankfurt</option>
                <option value="Cologne">Cologne</option>
                <option value="Hamburg">Hamburg</option>
                <option value="Leipzig">Leipzig</option>
                <option value="Nuremberg">Nuremberg</option>
                <option value="Bremen">Bremen</option>
                <option value="Hanover">Hanover</option>
                <option value="Mannheim">Mannheim</option>
              </select>
              <button type="submit" className="btn btn-accent text-3xl">Get Started</button>
            </form>
          </div>
        </div>
        <div className="carousel lg:w-1/2 lg:h-2/3 rounded-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={b1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={d1} className="w-full " />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={s1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={m1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;