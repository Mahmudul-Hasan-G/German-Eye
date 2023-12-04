//import bgimg from "../../../public/backgroungimg-germany.png";

const Home = () => {
  return (
    <div>
      <form className="hero min-h-screen" style={{ backgroundImage: `url(/backgroungimg-germany.png)` }}>
        <div className="bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-black text-6xl font-bold">Hello there</h1>
            <p style={{ color: '#FF0000' }} className="mb-5 font-bold text-4xl">Explore Metro Cities of Germany</p>
            <button className="btn btn-warning text-3xl text-white">Get Started</button>

          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;