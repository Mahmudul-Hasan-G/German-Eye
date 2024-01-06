import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import { useLocation, useNavigate } from 'react-router-dom';

const Book = () => {
  const location = useLocation();
  const book = location.state.book;
  const image = location.state.image;
  console.log(book);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);

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

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <div className='bg:pt-0 mt-20'>
      <div style={{ backgroundImage: `url(${image})` }} className=" lg:bg-cover bg-none ">
        <div className='lg:grid grid-cols-4 gap-6 lg:justify-items-center py-10'>
          <div className="lg:flex items-center">
            <button className='btn btn-accent text-2xl' onClick={prevPage} disabled={pageNumber <= 1}>
              Previous Page
            </button>
          </div>
          <div className='lg:col-span-2 '>
            <Document className=" border-solid border-red-500 border-2 shadow-xl" file={book} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} width={width > 600 ? 600 : 430} className="lg:w-full" />
            </Document>
            <style>
              {`
          @import url('https://fonts.googleapis.com/css2?family=Whisper&display=swap');
        `}
            </style>
            <p style={{ fontFamily: "'Whisper', cursive" }} className='bg-black my-4 text-center text-4xl text-white'>Page {pageNumber} of {numPages}</p>
          </div>
          <div className="flex items-center">
            <button className='btn btn-accent text-2xl' onClick={nextPage} disabled={pageNumber >= numPages}>
              Next Page
            </button>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <button onClick={handleGoBack} className='btn btn-accent my-6 '>Go back</button>
      </div>
    </div>
  );
};

export default Book;