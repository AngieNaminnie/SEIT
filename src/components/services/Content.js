
import Soporte from 'assets/img/soporte.jpg';
import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Paragraph from '@material-tailwind/react/Paragraph';
import H3 from '@material-tailwind/react/Heading3';

export default function Content() {
    return (
        <section>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
        <div className="bg-soporte-background bg-cover bg-center absolute top-0 w-full h-[47rem] lg:w-full lg:h-[40rem]"/>
        {/* responsive */}
        <div className="container max-w-8xl relative mx-auto">
           
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-gray-200'>
                  {/* divs del grid */}
                  
                   <div className='w-96 h-32 self-stretch mt-20 ml-8 '> 
                   <H3 color="white" >Soporte</H3>
                   <p className='text-sm md:text-base font-bold '>El buen funcionamiento de tu equipo es vital para trabajar de una manera rápida y eficiente, 
                   es por eso que nos aseguramos que tus computadoras estén libres de virus y programas que las puedan dañar, que cuenten
                    con la capacidad suficiente para su buen desempeño, que el sistema operativo y los programas tengan las actualizaciones 
                    necesarias y que todas sus piezas estén debidamente instaladas y configuradas, además, que tu información esté debidamente 
                    respaldada ya que es lo más importante para la empresa.

                    </p>
                   
                   </div>
                    {/* divs del grid */}
                    <div className=' w-96 h-32 self-stretch mt-20 ml-10'>
                    <H3 color="white">Servicios</H3>
                        <ul className='font-bold list-disc '>
                       <li>Respaldo de información</li>
                        <li>Formateo e instalación de sistemas operativos</li>
                        <li>Instalación de programas (Office, antivirus, utilerías, paqueterías de diseño y multimedia, entre otros).</li>
                        <li>Análisis y eliminación de virus</li>
                        <li> Remplazo de piezas y componentes descompuestos</li>
                        <li>Recuperación de información</li>
                        <li>Instalación y configuración de impresoras</li>
                        </ul>
                       
                    </div>

                   {/* divs del grid */}
                   <div className=''>
                     <div className="flex flex-wrap relative ">
                    <div className="w-80 h-[25rem]  mx-auto flex justify-center lg:mt-10">
                   <Card> 
                        <div>
                            <CardImage className='rounded-full' alt="Card Image" src={Soporte} /></div>
                            <CardBody className=' text-center' >
                           
                                <a className='mb-4 text-xl text-gray-900 font-serif font-semibold' href='/servicios'>Soporte Técnico</a>
                                <div className='mt-4'>
                                <Paragraph color="blueGray">
                                En SEIT nos especializamos en el mantenimiento preventivo 
                                y correctivo de equipo de cómputo.
                            
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
