import Title from 'components/landing/Title';
import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Paragraph from '@material-tailwind/react/Paragraph';
import Tienda from 'assets/img/Tienda.png';
import Diseñoweb from 'assets/img/web.jpg';
import Energia from 'assets/img/energia.jpeg';
import Cableado from 'assets/img/cableado.jpeg';
import Alarma from 'assets/img/alarma.jpg';
import Camara from 'assets/img/camara.jpeg';
import Accesorio from 'assets/img/accesorio.jpeg';

                    //****** Tienda  ***** */
export default function TeamSection() {
    return (
        <section className="pt-20 pb-48 mb-0">
            <div className="container max-w-7xl mx-auto px-4 md:items-center ">
                <Title heading="Tienda">
                </Title>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                    {/* Productos */}
                    <div>
                    <div className="md:h-full md:w-fit md:w-min px-2 mr-auto lg:mt-0 mb:text-center sm:text-xs"> 
                    <div className="flex flex-wrap relative">
                    <div className="md:w-[10rem] md:h-[11rem] mx-auto flex justify-center mt-24 mb-10 lg:mt-0">
                    <Card> 
                            <div>
                            <CardImage className='justify-center background-size:cover' alt="Card Image" src={Accesorio} /></div>
                            <CardBody className=' text-center'>
                                <a className='lg:mb-2 lg:text-base md:text-base text-gray-900  font-serif font-semibold text-center' href='https://www.tienda.seitgdl.com.mx/12-accesorios-generales'>Accesorios generales </a>
                                
                            </CardBody>
                            </Card>
                   
                   </div>
                  
                   
                  <div className="md:h-full md:w-fit md:w-min px-2 mr-auto mt-24 lg:mt-0 mb:text-center sm:text-xs">   
                  <div className="md:w-[10rem] md:h-[11rem]  mx-auto flex justify-center mt-24 mb-10 lg:mt-0">
                            <Card> 
                            <div>
                             <CardImage className='rounded-tr background-size: cover' alt="Card Image" src={Camara} /></div>  
                             <CardBody className=' text-center'> 
                                <a className='mb-4 text-base font-serif font-semibold' href='https://www.tienda.seitgdl.com.mx/13-camaras-ip-y-nvrs'>Cámaras y seguridad</a>
                                 
                             </CardBody> 
                            </Card>
                          </div>       
                          </div> 
                          </div> 
                                          
               
                           <div className="md:w-[10rem] md:h-[11rem] mx-auto flex justify-center mt-24 mb-10 lg:mt-0">
                            <Card> 
                            <div>
                            <CardImage className='justify-center background-size:cover' alt="Card Image" src={Diseñoweb} /></div>
                            <CardBody className='text-center'>
                                <a className='mb-4 text-gray-900 text-base font-serif font-semibold text-center' href='https://www.tienda.seitgdl.com.mx/22-software-cms-vms-hosting'>Software y Diseño web</a> 
                            </CardBody>
                            </Card>
                  
                 
                            </div>
                            </div>
                            </div>
                            {/* </div> */}

                          
                        {/* segunda parte */}
                          <div>
                      <div className="md:h-full md:w-fit md:w-min px-2 mr-auto lg:mt-0 mb:text-center sm:text-xs"> 
                         <div className="flex flex-wrap relative">
                         <div className="md:hh-full md:hw-fit md:w-min px-2 mr-auto  lg:mt-0">  
                         <div className="md:hw-[10rem] md:h-[11rem]  mx-auto flex justify-center mt-24 mb-10 lg:mt-0">

                            <Card> 
                            <div>
                             <CardImage className='rounded-tr ' alt="Card Image" src={Cableado} /></div>  
                             <CardBody className=' text-center'> 
                                <a className='mb-4 text-base font-serif font-semibold' href='https://www.tienda.seitgdl.com.mx/10-cableado-estructurado'>Cables y conectores</a>
                                 <div className='mt-4'> 
                                 </div> 
                             </CardBody> 
                            </Card>
                          </div>    
                          </div>
                 
                          
                      <div className="md:h-full md:w-fit md:w-min px-2 mr-auto mt-24 lg:mt-0">   
                      <div className="md:w-[10rem] md:h-[11rem] mx-auto flex justify-center mt-24 mb-10 lg:mt-0 mb:text-center sm:text-xs">
                            <Card> 
                            <div>
                             <CardImage className='rounded-tr ' alt="Card Image" src={Alarma} /></div>  
                             <CardBody className=' text-center'> 
                                <a className='mb-4 text-base font-serif font-semibold' href='https://www.tienda.seitgdl.com.mx/7-alarmas-casa-inteligente'>Alarmas</a>
                                 
                             </CardBody> 
                            </Card>
                          </div>       
                          </div>  
                          

                  {/* <div className="h-full w-fit md:w-min px-2 mr-auto mt-24 lg:mt-0">   */}
                  <div className="md:w-[10rem] md:h-[11rem]  mx-auto flex justify-center mt-24 mb-10 lg:mt-0 mb:text-center sm:text-xs">

                            <Card> 
                            <div>
                             <CardImage className='rounded-tr ' alt="Card Image" src={Energia} /></div>  
                             <CardBody className=' text-center'> 
                                <a className='mb-4 text-base font-serif font-semibold' href='https://www.tienda.seitgdl.com.mx/16-energia'>Fuentes de alimentación</a>
                                 <div className='mt-4'> 
                                 </div> 
                             </CardBody> 
                            </Card>
                          </div>    
                          </div>
                          </div>
                          
                 
                            {/* </div> */}

                          </div> 
                          


             {/* Tienda */}
            <div>
           
            <div class="md:shrink-0 md:ml-32 lg:ml-4"> 
            <div className=' md:w-96 ml-0 mb:text-center sm:text-xs'>
            <br/><br/> <br/><br/><br/><br/><br/>
            <Card> 
               <div>
               <CardImage className='rounded-tr shadow-2xl' alt="Card Image" src={Tienda} /></div>  
                <CardBody className=' text-center'> 
                {/* <h1 className='mb-4 text-xl sm:text-left font-serif font-semibold text-center'>Tienda Física</h1> */}
                   <a className='mb-4 text-xl font-serif font-semibold' href="">Tienda Física</a>
                {/*     <div className='mt-4'>  sm:text-centers */}
                   <Paragraph color="blueGray">
                   Opciones de servicio: Citas en línea · Servicios en el lugar <br/><br/>
                   Dirección: Cto. de Abedules 54 - A, 45654 Jal. text-center
                   </Paragraph>
                   
                </CardBody> 
               </Card> 

            </div>
            </div> 
                          </div>
                          
           
                   
                    </div>  {/* cierre de grid */}
                   

            </div>
        </section>
        
    );
}
