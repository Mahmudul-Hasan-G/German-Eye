
import Marquee from "react-fast-marquee";


const Home = () => {
  return (
    <div>
 <Marquee speed={80} direction="right" gradient={true} gradientColor={[239, 23, 23]}>
                <h1 className="text-6xl mb-4 p-2">Cultural places and Weather Updates</h1>
            </Marquee>

      <div className="hero min-h-screen" style={{ backgroundImage: `url(/backgroungimg-germany.png)` }}>
        <div className="bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-black text-6xl font-bold">Hello there</h1>
            <p style={{ color: '#FF0000' }} className="mb-5 font-bold text-4xl">Explore Metro Cities of Germany</p>
            

            <select className="select select-info w-full max-w-xs mb-8 font-bold bg-orange-600">
  <option>Select city</option>
  <option>Berlin</option>
  <option>Duisburg</option>
  <option>Stuttgart</option>
  
</select>
<button className="btn btn-warning text-3xl text-white">Get Started</button>


       

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;