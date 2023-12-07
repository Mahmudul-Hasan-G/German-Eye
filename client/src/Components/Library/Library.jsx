

const Library = () => {
    return (
        <div>
        <h1 className="text-center text-4xl font-bold mb-6 text-yellow-500 border-b-2 border-red-500 rounded-full px-2 py-1">
        Library
      </h1>
            <h2 className="text-3xl font-bold mb-6">Phylosophy</h2>
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
            <h2 className="card-title">Title of the book</h2>
            <p>a small bio of what the books talk about</p>
            <div className="card-actions">
  <button
    className="btn btn-primary"
    style={{ backgroundColor: 'red', color: 'white' }}
  >
    Read me now!
  </button>
</div>
          </div>
        </div>
      ))}
    </div>

    <h2 className="text-3xl font-bold mb-6">Horror</h2>
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
            <h2 className="card-title">Title of the book</h2>
            <p>a small bio of what the book talk about</p>
            <div className="card-actions">
  <button
    className="btn btn-primary"
    style={{ backgroundColor: 'red', color: 'white' }}
  >
    Read me now!
  </button>
</div>
          </div>
        </div>
      ))}
    </div>

    <h2 className="text-3xl font-bold mb-6">Fantasy</h2>
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
            <h2 className="card-title">Title of the book</h2>
            <p>a small bio of what the book talk about</p>
            <div className="card-actions">
  <button
    className="btn btn-primary"
    style={{ backgroundColor: 'red', color: 'white' }}
  >
    Read me now!
  </button>
</div>
          </div>
        </div>
      ))}
    </div>

        </div>
    );
};

export default Library;