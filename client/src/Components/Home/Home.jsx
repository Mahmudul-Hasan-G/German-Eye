//import bgimg from "../../../public/backgroungimg-germany.png";

const Home = () => {
    return (
        <div>
           <div className="hero min-h-screen" style={{backgroundImage:  `url(/backgroungimg-germany.png)`}}>
  <div className="bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-6xl font-bold bg-accent">Hello there</h1>
      <p className="mb-5  bg-secondary font-bold text-4xl">Explore Metro Cities of Germany</p>
      <button className="btn btn-primary text-3xl">Get Started</button>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;