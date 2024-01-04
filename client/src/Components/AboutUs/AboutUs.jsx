

const AboutUs = () => {




  return (
    <div className='bg-cover text-white flex justify-center ' style={{ backgroundImage: `url(/images/about-us-background.png)` }}>
      <div className='flex flex-col' >
        <div className="text-center mt-20">
          <h1 className="text-6xl text-black text-bold">We are a team of happy web developer</h1>
          <h2 className="text-3xl text-black mt-8 text-purple-900 border-solid border-4 border-orange-400 p-8 bg-white mx-8 rounded-lg">Welcome to German Eye, a creation fueled by the collective passion of our team of intrepid explorers. At German Eye, we believe in more than just showcasing the beauty of Germany; we strive to capture the essence of our travels and share them through the eyes of the beholder. Born out of a deep love for wandering through the picturesque landscapes and embracing the rich culture of Germany, this platform is a testament to our unwavering enthusiasm for adventure. Beyond the visual journey, we invite you to discover the heart of German Eye within our cozy virtual library. Carefully curated books serve as literary passports, allowing your mind to embark on captivating journeys parallel to our physical explorations. German Eye is not just a travel website; it`s an immersive experience where every click unfolds the magic of Germany both visually and intellectually. Join us in this odyssey, as we invite you to see the world through our eyes and venture into the boundless realms of your own imagination. </h2>
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