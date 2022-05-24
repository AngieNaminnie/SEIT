import H2 from '@material-tailwind/react/Heading2';
import LeadText from '@material-tailwind/react/LeadText';
import Portada1 from 'assets/img/Portada-1.jpg';
import Portada2 from 'assets/img/portada-2.jpg';
import Portada3 from 'assets/img/portada-3.jpg';
import React from "react";

export default function Header() {
  return (
      
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
    <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full" />
    <div className="container max-w-8xl relative mx-auto">
        <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <H2 color="white">Soluciones Empresariales en Informática Tecnología</H2>
                <div className="text-gray-200">
                    <div className="absolute w-full top-1/2 trasform -traslate-y-1/2 px-3 flex justify-between items-center"></div>
                    
                    {/* <LeadText color="gray-200">
                       
                    </LeadText> */}
                </div>
            </div>
        </div>
    </div>
</div>


  );
}

