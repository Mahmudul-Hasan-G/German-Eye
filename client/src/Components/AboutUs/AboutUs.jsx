

const AboutUs = () => {




  return (
    <div className='bg-center text-white flex justify-center ' style={{ backgroundImage: `url(/images/about-us-background.png)` }}>
      <div className='flex flex-col' >
        <div className="text-center mt-20">
          <h1 className="text-6xl text-black text-bold">We are a team of happy web developer</h1>
          <h2 className="text-3xl text-black mt-8 text-purple-900">We tried to make this website from our heart.We wish<br /> it help you to know Germany by the peoples EYE.So are<br /> you ready to explore and share your vision with all. </h2>
        </div>
        <div className="grid grid-cols-3 justify-items-center gap-6 my-20 text-black">
          <div>
            <div className="card w-96 h-full bg-base-100 shadow-xl">
              <figure className="h-4/5"><img className="h-full" src="images/hasan.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Hasan</h2>
                <p>Web Developer from DCI</p>

              </div>
            </div>
          </div>
          <div>
            <div className="card w-96 h-full bg-base-100 shadow-xl">
              <figure className="h-4/5"><img className="h-full" src="/images/Anu.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Anuradha</h2>
                <p>Web Developer from DCI</p>

              </div>
            </div>
          </div>
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure><img src="/images/Jemila.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Jemila</h2>
                <p>Web Developer from DCI</p>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
};

export default AboutUs;