import React from 'react';
import Imagen1 from 'assets/img/cliente-1.png';
import Imagen2 from 'assets/img/cliente-2.png';
import Imagen3 from 'assets/img/cliente-3.png';
//import { useState } from 'react/cjs/react.production.min';
import { useState, useRef, useEffect } from 'react';
import data from 'components/landing/data.json';


const Carousel = () => {
    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef(null);

    const movePrev = () => {
      if (currentIndex > 0) {
        setCurrentIndex((prevState) => prevState - 1);
      }
    };
  
    const moveNext = () => {
      if (
        carousel.current !== null &&
        carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
      ) {
        setCurrentIndex((prevState) => prevState + 1);
      }
    };
  
    const isDisabled = (direction) => {
      if (direction === 'prev') {
        return currentIndex <= 0;
      }
  
      if (direction === 'next' && carousel.current !== null) {
        return (
          carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
        );
      }
  
      return false;
    };
  
    useEffect(() => {
      if (carousel !== null && carousel.current !== null) {
        carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
      }
    }, [currentIndex]);
  
    useEffect(() => {
      maxScrollWidth.current = carousel.current
        ? carousel.current.scrollWidth - carousel.current.offsetWidth
        : 0;
    }, []);
  


return(

    
//******seccion de clientes*****//
<section>
    <div className='flex justify-center items-center container mx-auto px-5 '>
        <div class='p-10 mt-0 w-72 h-24 rounded-lg bg-red-700 shadow-2xl '>
        <div class='flex justify-center items-center text-4xl text-center text-white font-semibold mb-3'>
                    Clientes
        </div>
        </div>
    </div>

        {/**Carrusel **/}
    <div className=" my-12 mx-auto">
   
    <div className="relative overflow-hidden">
      <div className="flex justify-between absolute top left w-full h-full">
        <button
          onClick={movePrev}
          className="hover:bg-red-900/75 text-red-700 w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
          disabled={isDisabled('prev')}
        >
             <svg
            //xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-20 -ml-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
             <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {/* <span className="sr-only">Prev</span> */}
        </button>
        <button
          onClick={moveNext}
          className="hover:bg-blue-900/75 text-red-700 w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
          disabled={isDisabled('next')}
        >
          <svg
            //xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-20 -ml-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="sr-only">Next</span>
        </button>
      </div>
      <div
        ref={carousel}
        className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
      >
        {data.resources.map((resource, index) => {
          return (
            <div
              key={index}
              className="carousel-item items-center text-center relative my-10 mx-8 snap-start"
            >
                <img
                  src={resource.imageUrl || ''}
                  className="object-containe w-96 h-32  mb-6 shadow-lg "
                />
              
            </div>
          );
        })}
      </div>
    </div>
  </div>
  

  </section>


);  
};

//}
export default Carousel;