import H5 from '@material-tailwind/react/Heading5';
import H2 from '@material-tailwind/react/Heading2';
import H3 from '@material-tailwind/react/Heading3';
import H1 from '@material-tailwind/react/Heading1';
import LeadText from '@material-tailwind/react/LeadText';
import Icon from '@material-tailwind/react/Icon';
import Footer from 'assets/img/Footer.jpeg';



export default function DefaultFooter() {
    return (
    <>    
    
             <footer className="relative w-full h-96 bg-gray-100 ">  
             
             <div className="relative pt-16 pb-32 flex content-center items-center justify-center">
            <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-[67rem] lg:h-[35rem] md:h-[42rem]" />
            <div className="container max-w-8xl relative mx-auto">
                <div className="items-center flex flex-wrap">
          
          
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Informacion */}
            <div className='ml-4'>
            <H3 color="white">Contacto</H3><br/>
                <p className='text-gray-200'>INFORMACIÓN</p><br/>
                <div className='w-72 h-32 text-lg'>
                <p className='text-gray-200 text-rigth text-justify lg:text-xl md:text-left text-md'>
                    Déjanos tus datos y uno de nuestros asesores de 
                    tecnologías de información se pondrá en contacto contigo a la brevedad.</p>
                <br/>
                <div class="bg-trasparent-500 items-left">
                
                <div className="absolute w-full top-1/2 trasform -traslate-y-1/2 px-3 flex justify-between items-center"></div>
                    <div className="flex gap-4 mt-6 md:justify-start md:mb-0 mb-8 justify-center">
                    <div >
                        <a
                                    href="https://www.facebook.com/SEITGDL/"
                                    className="grid place-items-center bg-white text-blue-600 shadow-md font-normal h-14 w-14 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-facebook-square"
                                    />
                                </a>
                                </div>
                                <div class="bg-trasparent-500 col-span-2">
                                <a
                                    href="https://twitter.com/SEIT42032734"
                                    className="grid place-items-center bg-white text-blue-400 shadow-md font-normal h-14 w-14 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-twitter"
                                    />
                                </a>
                            </div>
                                <div class="bg-trasparent-500 col-span-2">
                                <a
                                    href="https://www.youtube.com/channel/UCAoNMhhwB0PMm94I6-3J_dQ"
                                    className="grid place-items-center bg-white text-red-600 shadow-md font-normal h-14 w-14 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-youtube"
                                    />
                                </a>
        
                        </div>
                            </div>
                             </div>
                              </div >
                                  </div>
                                {/* final */}
             {/* grid del telefono */}
            {/* <div className='text-gray-200 text-2xl ml-10 mt-28 md:ml-20 md:text-base '>
           
            <p >Telefono: 3315252270</p>
            <p>WhatsApp: 3315252270</p>
            <p >Email: contacto@seitgdl.com.mx</p>
           
            </div> */}
             {/* grid del facebook */}
            <div className='ml-4 mt-32 md:ml-8 lg:ml-14 lg:mt-0'>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSEITGDL%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"className='w-80 h-96 rounded-lg shadow-2xl' ></iframe>

            </div>

<div className='text-gray-200 ml-4 mt-12 lg:text-2xl lg:ml-14 lg:mt-32 md:ml-4 md:mt-0 md:text-base '>
           
            <p >Telefono: 3315252270</p>
            <p>WhatsApp: 3315252270</p>
            <p >Email: contacto@seitgdl.com.mx</p>
           
            </div>


                {/* Copyright */}
                            </div>
                        </div>
                    </div>  
                    </div> 
                    
                    <div className="text-sm text-gray-700 font-medium text-center">
                        Copyright ©  SEIT GDL. All Rights Reserved {new Date().getFullYear()}
                    </div>
              
             </footer> 
        </>
    );
}
