
import { useNavigate } from "react-router-dom";


const Library = () => {
  const navigate = useNavigate();
  const handleClick = (book, image) => {
    navigate("/book", { state: { book, image } });
  }


  return (

    <div>
      <h1 className="text-center text-6xl font-bold text-yellow-500 border-b-2 border-red-500 rounded-full px-2 mt-6 pb-4">
        Library
      </h1>

      <div className="bg-cover" style={{ backgroundImage: `url(/images/lib.jpg)` }}>
        <div className="grid grid-cols-3 justify-items-center gap-12 py-12 " >
          <div className="card w-96 bg-base-100 shadow-xl">
            <h2 className="text-3xl text-center font-bold pt-6">SCI-FI</h2>
            <figure className="px-10 pt-10">
              <img
                src="/images/jv.jpg"
                alt="Books"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">20,000 leagues under the sea</h2>
              <p>During the year 1866, ships of various nationalities sight a mysterious sea monster, which, it is later suggested, might be a gigantic narwhal. The U.S. government assembles an expedition in New York City to find and destroy the monster.</p>
              <div className="card-actions">
                <button onClick={() => handleClick("/books/20k.pdf", "/images/jv.jpg")}
                  className="btn btn-accent">
                  Read me now!
                </button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl">
            <h2 className="text-3xl text-center font-bold pt-6">Adventure</h2>
            <figure className="px-10 pt-10">
              <img
                src="/images/MY.jpg"
                alt="Books"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">The Mysterious Island by Jules</h2>
              <p>The Mysterious Island is a 19th-century science-fiction adventure novel by French author Jules Verne. The plot concerns five men who, during the American Civil War, escape a prison camp in Richmond, Virginia by stealing a hot air balloon and subsequently discover an uninhabited island .</p>
              <div className="card-actions">
                <button onClick={() => handleClick("/books/MI.pdf", "/images/MY.jpg")}
                  className="btn btn-accent"
                >
                  Read me now!
                </button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl">
            <h2 className="text-3xl text-center font-bold pt-6">Mystery</h2>
            <figure className="px-10 pt-10 h-full">
              <img
                src="/images/trc.webp"
                alt="Books"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">The Adventure of the Red Circle</h2>
              <p>When the mysterious lodger (actually a woman, not a man) shows up, she tells the detectives that the dead man was trying to kill her husband for betraying a criminal enterprise known as the Red Circle. In the end, the couple are safe, the bad guy is dead and self-defense is the explanation.</p>
              <div className="card-actions">
                <button onClick={() => handleClick("/books/trc.pdf", "/images/trc.webp")}
                  className="btn btn-accent"
                >
                  Read me now!
                </button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl">
            <h2 className="text-3xl text-center font-bold pt-6">Biography</h2>
            <figure className="px-10 pt-10">
              <img
                src="/images/ar.jpg"
                alt="Books"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Ancient Rome</h2>
              <p>They were great soldiers and could conquer: they could also hold and keep their conquests and impress the Roman stamp on all the peoples over whom they ruled.</p>
              <div className="card-actions">
                <button onClick={() => handleClick("/books/ar.pdf", "/images/ar.jpg")}
                  className="btn btn-accent">
                  Read me now!
                </button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl">
            <h2 className="text-3xl text-center font-bold pt-6">Cooking</h2>
            <figure className="px-10 pt-10">
              <img
                src="/images/365.jpg"
                alt="Books"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">365 FOREIGN DISHES</h2>
              <p>
                A quality reprint of : 365 Foreign Dishes , originally published in 1908 with the subtitle - A Foreign Dish for Every Day in the Year. Starting on January 1st with Austrian Goulash and ending on December 31st with French Braised Sweetbread, you can cook your way around the world all year long! Dedicated to all Vintage Cookbook Lovers!</p>
              <div className="card-actions">
                <button onClick={() => handleClick("/books/365.pdf", "/images/365.jpg")}
                  className="btn btn-accent">
                  Read me now!
                </button>
              </div>
            </div>
          </div>


          <div className="card w-96 bg-base-100 shadow-xl">
            <h2 className="text-3xl text-center font-bold pt-6">Romance</h2>
            <figure className="px-10 pt-10">
              <img
                src="/images/wiw.jpg"
                alt="Books"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">The woman in white</h2>
              <p>
                It was written by Wilkie Collins in 1859 and tells a story of intrigue in London. Walter Hartright is a young art teacher. One night in London, he sees a distressed woman dressed entirely in white. He gives her directions, and later finds out from the police that she had escaped from a nearby asylum.</p>
              <div className="card-actions">
                <button onClick={() => handleClick("/books/wiw.pdf", "/images/wiw.jpg")}
                  className="btn btn-accent">
                  Read me now!
                </button>
              </div>
            </div>
          </div>


        </div>

      </div>
    </div>
  );
};

export default Library;