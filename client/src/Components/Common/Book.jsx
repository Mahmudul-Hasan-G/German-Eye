import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import { useLocation } from 'react-router-dom';

const Book = () => {
  const location = useLocation();
  const book = location.state.book;
  const image = location.state.image;
  console.log(book);
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
      <div style={{ backgroundImage: `url(${image})` }} className=" bg-cover grid grid-cols-3 gap-6 justify-items-center py-10">
        <div className="flex items-center">
          <button className='btn btn-accent' onClick={prevPage} disabled={pageNumber <= 1}>
            Previous
          </button>
        </div>
        <div>
          <Document className=" border-solid border-2 w-100% shadow-xl" file={book} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          <style>
            {`
          @import url('https://fonts.googleapis.com/css2?family=Whisper&display=swap');
        `}
          </style>
          <p style={{ fontFamily: "'Whisper', cursive" }} className='bg-black my-4 text-center text-4xl text-white'>Page {pageNumber} of {numPages}</p>
        </div>
        <div className="flex items-center">
          <button className='btn btn-accent' onClick={nextPage} disabled={pageNumber >= numPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;