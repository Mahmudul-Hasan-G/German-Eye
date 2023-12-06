

const Library = () => {
    return (
        <div>
     <div className="flex space-x-20">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://assets.architecturaldigest.in/photos/624c2654cf7483eb90e638d6/4:3/w_1440,h_1080,c_limit/Books-1.jpg"
              alt="Books"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Philosophy</h2>
            <p>example books</p>
            <div className="card-actions">
              <button className="btn btn-primary">Read me now!</button>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="flex space-x-20">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://media.istockphoto.com/id/157281215/de/foto/alchemie.jpg?s=2048x2048&w=is&k=20&c=XgOD_bnQ9RgSeV8MM8qdE2FG24tRZhnpPJ_ZORp0l48="
              alt="Books"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Horror</h2>
            <p>example books</p>
            <div className="card-actions">
              <button className="btn btn-primary">Read me now!</button>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="flex space-x-20">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://img.freepik.com/premium-photo/open-magic-book-with-fairy-tales_763713-614.jpg"
              alt="Books"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Fantasy</h2>
            <p>example books</p>
            <div className="card-actions">
              <button className="btn btn-primary">Read me now!</button>
            </div>
          </div>
        </div>
      ))}
    </div>

        </div>
    );
};

export default Library;