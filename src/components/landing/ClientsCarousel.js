import React from 'react';
import Imagen1 from 'assets/img/cliente-1.png';
import Imagen2 from 'assets/img/cliente-2.png';
import Imagen3 from 'assets/img/cliente-3.png';
import Imagen4 from 'assets/img/cliente-4.png';
import Imagen5 from 'assets/img/cliente-5.jpg';
import Imagen6 from 'assets/img/cliente-6.png';
import Imagen7 from 'assets/img/cliente-7.png';
import Imagen8 from 'assets/img/cliente-8.png';
import  H2  from '@material-tailwind/react/Heading2';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ClientsCarousel = () =>{

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    return (
      <div className='container m-4 '>
        
        <div class='h-10 text-center mt-2 mb-24 lg:text-center mb:text-center '>
           <H2 >Clientes</H2>
            </div>
        <Slider {...settings} >
         
               <div className='h-28 '>
               <img className='h-full w-10/12 lg:w-full lg:h-full '
                              src={Imagen1}
                              />
              </div>
              <div className='h-28 '>
              <img className='h-full w-10/12 lg:w-full lg:h-full'
                              src={Imagen3}
                              />
              </div>
              <div className='h-28 '>
              <img className='h-full w-10/12 lg:w-full lg:h-full'
                              src={Imagen4}
                              />
              </div>
              <div className='h-28 '>
              <img className='h-full w-10/12 lg:w-full lg:h-full'
                              src={Imagen2}
                              />
              </div>
              <div className='h-28 '>
              <img className='h-full w-10/12 lg:w-full lg:h-full'
                              src={Imagen5}
                              />
              </div>
              <div className='h-28'>
              <img className='h-full w-10/12 lg:w-full lg:h-full'
                              src={Imagen6}
                              />
              </div>  
              <div className=' h-28'>
              <img className='h-full w-10/12 lg:w-full lg:h-full'
                              src={Imagen7}
                              />
              </div>  
              <div className='h-28'>
              <img className='h-full w-10/12 lg:w-full lg:h-full'
                              src={Imagen8}
                              />
              </div>  
             
        </Slider>
   
      </div>
    )
}

export default ClientsCarousel;






