import H2 from '@material-tailwind/react/Heading2';
import LeadText from '@material-tailwind/react/LeadText';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Header = () =>{
  
    const settings = {
      dots:true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      cssEase: "linear"
     
    };

 
  return (
      <div className='bg-gray-100 '>
      <Slider {...settings} >
          {/* 1 */}
          <div className='h-[42.5rem]'>
          
              <div className='bg-cover bg-center bg-portada4-background w-full h-full'>
                <div className="items-center flex flex-wrap ">
                <div className="w-full lg:w-6/12  px-4 ml-auto mr-auto text-center mt-56">
                        <H2 className="md:text-md" color="white">Soluciones empresariales en Informatica y tecnología</H2>
                  </div>
                </div>
                </div>
          </div>
          {/* 2 */}
              <div className='h-[42.5rem]'>
              <div className='bg-cover bg-center bg-portada3-background w-full h-full'>
                <div className="items-center flex flex-wrap ">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center mt-56">
                        <H2 color="white">Soluciones empresariales en Informatica y tecnología</H2>
                  </div>
                </div>
                </div>
              </div>
          {/* 3 */}
              <div className='h-[42.5rem]'>
              <div className='bg-cover bg-center bg-portada2-background w-full h-full'>
                <div className="items-center flex flex-wrap ">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center mt-56">
                        <H2 color="white">Soluciones empresariales en Informatica y tecnología</H2>
                  </div>
                </div>
                </div>
                </div>
                {/* 4 */}
              <div className='h-[42.5rem] '>
              <div className='bg-cover bg-center bg-portada5-background w-full h-full'>
                <div className="items-center flex flex-wrap ">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center mt-56">
                        <H2 color="white">Soluciones empresariales en Informatica y tecnología</H2>
                  </div>
                </div>
                </div></div>
                {/* </div> 
              <div class="block ig:hidden">
                <button di="boton" class="flex items-center px-3 py-2 border rouded text-teal-200 border-teal-400 hover:text-white hover:">
                  <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xml="https/:Www.w3.org/2000/svg">
                    <litle>Menú</litle>
                    <path d="MB 3h20v2h0V3zn0 6h20v2H0V9zn0  6h20v2H0v-2z"></path>
                  </svg>
                </button>
              </div>*/}
       
      
        
        </Slider> 
        </div>
  );
}

export default Header;