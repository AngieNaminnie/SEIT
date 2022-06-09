import Redesimg from 'assets/img/redes.jpg';
import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Paragraph from '@material-tailwind/react/Paragraph';
import H3 from '@material-tailwind/react/Heading3';


export default function Redes() {
    return (
        <section>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
        <div className="bg-redes-background bg-cover bg-center absolute top-0 w-full h-[40rem]" />
        {/* responsive */}
        <div className="container max-w-8xl relative mx-auto">

           
                <div className=' grid grid-cols-3 text-gray-200'>   
                  {/* divs del grid */}
                   <div className='w-96 h-32 self-stretch mt-20 ml-5 '> 
                   <H3 color="white">Redes</H3>
                   <p className='text-md font-bold'>
                    En el caso de las redes alámbricas e inalámbricas, 
                    realizamos un análisis para diagnosticar cualquier problema de conectividad,
                    dando solución y buscando áreas donde se pueda mejorar la infraestructura de 
                    red, ofreciendo soluciones en cableado estructurado y conectividad inalámbrica.
                    </p>
                   </div>
                    {/* divs del grid */}
                <div className=' w-96 h-32 self-stretch mt-20 ml-20'>
                    <H3 color="white">Servicios</H3>
                        <ul className='font-bold list-disc'>
                            <li>Instalación de cableado para oficinas</li>
                            <li>WiFi para salas de juntas</li>
                            <li>Equipo para videoconferencia</li>
                            <li>Telefonía IP</li>
                            <li>Proyección y displays interactivos</li>
                            <li>Control y automatización</li>
                            <li>Cobertura celular</li>
                        </ul>
                       
                    </div>
                 

                   {/* divs del grid */}
                   <div className=''>
                     <div className="flex flex-wrap relative ">
                    <div className="w-80 h-[25rem]  mx-auto flex justify-center mt-24 lg:mt-0">
                    <Card> 
                            <div>
                            <CardImage className='rounded-full' alt="Card Image" src={Redesimg} /></div>
                            <CardBody className=' text-center'>
                                <a className='mb-4 text-gray-900 text-xl font-serif font-semibold' href='/servicios'>Instalación Y Configuración De Redes</a>
                                <div className='mt-4'>
                                <Paragraph color="blueGray">
                                En el caso de las redes alámbricas e inalámbricas, ofrecemos soluciones 
                                en cableado estructurado y conectividad inalámbrica.
                                </Paragraph>
                                </div>
                            </CardBody>
                            </Card>
                   </div>
                   </div>
                   </div>
                   
                   
                 
                    </div>
                        </div>
                        
    </div>
    </section>
    

       );
}