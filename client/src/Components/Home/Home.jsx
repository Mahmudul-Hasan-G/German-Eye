import Marquee from "react-fast-marquee";
import b1 from '/b1.jpg';
import d1 from '/d1.avif';
import s1 from '/s1.jpg';
import m1 from '/m1.jpg';


const Home = () => {
  return (
    <div>
      <Marquee className="text-white bg-gradient-to-r from-red-400 to-blue-400" speed={20} direction="right" gradient={true} gradientColor={[239, 23, 23]}>
        <h1 className="text-6xl mb-4 p-2">Cultural places and Weather Updates</h1>
      </Marquee>
      <div className="h-screen w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(/bg1.png)` }}>
        <div>
          <div className="max-w-md">
            <h1 className="mb-5 text-cyan-400 text-6xl font-bold">Hello there</h1>
            <p className="mb-5 font-bold text-4xl text-cyan-400">Explore Metro Cities of Germany</p>


            <select className="select select-info w-full max-w-xs mb-8 font-bold bg-orange-600">
              <option>Select city</option>
              <option>Berlin</option>
              <option>Duisburg</option>
              <option>Stuttgart</option>

            </select>
            <button className="btn btn-warning text-3xl text-white">Get Started</button>




          </div>
        </div>
        <div className="carousel w-1/2 h-2/3 rounded-full">
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