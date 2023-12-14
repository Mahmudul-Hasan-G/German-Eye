import Marquee from "react-fast-marquee";
import b1 from '/b1.jpg';
import d1 from '/d1.avif';
import s1 from '/s1.jpg';
import m1 from '/m1.jpg';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [places, setPlaces] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const city = e.target.cityName.value;
    console.log(city);
    try {
      const response = await axios.get('http://localhost:5000/city', { params: { city } });
      console.log(response.data);
      setPlaces(response.data);
      navigate('/scity', { state: { places: response.data } });
      console.log(places);
    }
    catch (error) {
      console.error(error.message);
    }

  }

  return (
    <div>
      <Marquee className="text-white bg-gradient-to-r from-blue-400 to-green-400" speed={20} direction="right" gradient={true} gradientColor={[239, 23, 23]}>
        <h1 className="text-6xl mb-4 p-2">Cultural places and Weather Updates</h1>
      </Marquee>
      <div className="h-screen w-full bg-cover bg-center lg:flex items-center justify-center gap-x-36" style={{ backgroundImage: `url(/lake.jpg)` }}>
        <div>
          <div className="max-w-md">
            <h1 className="mb-5 text-cyan-400 text-6xl font-bold">Bring your Journey to US!</h1>
            <p className="mb-5 font-bold text-4xl text-cyan-400">Let us see through your EYES</p>

            <form onSubmit={handleSubmit}>
              <input type="text" name="cityName" placeholder="Write the City Name " className="input input-bordered input-accent w-full max-w-xs mb-4" />
              <button type="submit" className="btn btn-accent text-3xl">Get Started</button>
            </form>



          </div>
        </div>
        <div className="carousel lg:w-1/2 h-2/3 rounded-full">
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