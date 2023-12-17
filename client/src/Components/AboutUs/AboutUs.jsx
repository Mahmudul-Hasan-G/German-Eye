

const AboutUs = () => {


  

    return (
      <div className='bg-center h-screen text-white flex justify-center' style={{backgroundImage : `url(/about-us-background.png)` }}>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col justify-center items-center">
              <h1>Jemila</h1>
              <img style={{ width: '70%', height: '400px', borderRadius: '50%', marginBottom: '10px' }} src="/Jemila.jpg" />
              <p >My name is Jemila and this is a place holder for my description.</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1>Anuradha</h1>
              <img style={{ width: '70%', height: '400px', borderRadius: '50%', marginBottom: '10px' }} src="/Anu.jpg" />
              <p >My name is Anu and this is a place holder for my description.</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1>Hasan</h1>
              <img style={{ width: '70%', height: '400px', borderRadius: '50%', marginBottom: '10px' }} src="/hasan.jpg" />
              <p >My name is Anu and this is a place holder for my description.</p>
            </div>
          </div>
        </div>
    );
};

export default AboutUs;