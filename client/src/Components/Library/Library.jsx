 
import { useNavigate } from "react-router-dom";


const Library = () => {
  const navigate = useNavigate();
  const handleClick = (book , image ) => {
   navigate("/book", { state: {book , image}}); 
  }
 

  return (

    <div>
       <h1 className="text-center text-4xl font-bold mb-6 text-yellow-500 border-b-2 border-red-500 rounded-full px-2 py-1">
        Library
      </h1>


      <div className="flex flex-auto justify-center">
    <div className="card w-96 bg-base-100 shadow-xl">
      <h2 className="text-3xl text-center font-bold mb-6">SCI-FI</h2>
      <figure className="px-10 pt-10">
        <img
          src="/jv.jpg"
          alt="Books"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">20'000 leagues under the sea</h2>
        <p>During the year 1866, ships of various nationalities sight a mysterious sea monster, which, it is later suggested, might be a gigantic narwhal. The U.S. government assembles an expedition in New York City to find and destroy the monster.</p>
        <div className="card-actions">
          <button onClick={() => handleClick("/public/20k.pdf", "/jv.jpg")}
            className="btn btn-accent">
            Read me now!
          </button>
        </div>
      </div>
    </div>

    <div className="card w-96 bg-base-100 shadow-xl">
      <h2 className="text-3xl text-center font-bold mb-6">Adventure</h2>
      <figure className="px-10 pt-10">
        <img
          src="/MY.jpg"
          alt="Books"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">The Mysterious Island by Jules</h2>
        <p>The Mysterious Island is a 19th-century science-fiction adventure novel by French author Jules Verne. The plot concerns five men who, during the American Civil War, escape a prison camp in Richmond, Virginia by stealing a hot air balloon and subsequently discover an uninhabited island .</p>
        <div className="card-actions">
          <button onClick={() => handleClick("/public/MI.pdf", "/MY.jpg")}
            className="btn btn-accent"
          >
            Read me now!
          </button>
        </div>
      </div>
    </div>

    <div className="card w-96 bg-base-100 shadow-xl">
      <h2 className="text-3xl text-center font-bold mb-6">Fantasy</h2>
      <figure className="px-10 pt-10">
        <img
          src="https://img.freepik.com/premium-photo/open-magic-book-with-fairy-tales_763713-614.jpg"
          alt="Books"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Title of the book</h2>
        <p>A small bio of what the book talks about</p>
        <div className="card-actions">
          <button
            className="btn btn-accent"
          >
            Read me now!
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>
);
    };

export default Library;