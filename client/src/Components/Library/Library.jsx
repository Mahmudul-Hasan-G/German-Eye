import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'; 
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'; // Import the AnnotationLayer styles
import 'react-pdf/dist/esm/Page/TextLayer.css'; 
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; 

const Library = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  } 
  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }; 

  return (

    <div>
<Document
        file="/public/20000-Leagues-Under-the-Sea.pdf" // Replace with your PDF file path or URL
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p> 
      <div>
        <button onClick={prevPage} disabled={pageNumber <= 1}>
          Previous
        </button>
        <button onClick={nextPage} disabled={pageNumber >= numPages}>
          Next
        </button>
      </div> 

      {/* <h1 className="text-center text-4xl font-bold mb-6 text-yellow-500 border-b-2 border-red-500 rounded-full px-2 py-1">
        Library
      </h1>


      <div className="flex flex-auto justify-center">
    <div className="card w-96 bg-base-100 shadow-xl">
      <h2 className="text-3xl text-center font-bold mb-6">Philosophy</h2>
      <figure className="px-10 pt-10">
        <img
          src="https://assets.architecturaldigest.in/photos/624c2654cf7483eb90e638d6/4:3/w_1440,h_1080,c_limit/Books-1.jpg"
          alt="Books"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Title of the book</h2>
        <p>A small bio of what the books talk about</p>
        <div className="card-actions">
          <button
            className="btn btn-accent"
          >
            Read me now!
          </button>
        </div>
      </div>
    </div>

    <div className="card w-96 bg-base-100 shadow-xl">
      <h2 className="text-3xl text-center font-bold mb-6">Horror</h2>
      <figure className="px-10 pt-10">
        <img
          src="https://media.istockphoto.com/id/157281215/de/foto/alchemie.jpg?s=2048x2048&w=is&k=20&c=XgOD_bnQ9RgSeV8MM8qdE2FG24tRZhnpPJ_ZORp0l48="
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
  </div> */}
  </div>
);
    };

export default Library;