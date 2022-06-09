import Seguridadimg from 'assets/img/seguridad.jpg';
import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Paragraph from '@material-tailwind/react/Paragraph';
import H3 from '@material-tailwind/react/Heading3'


export default function Seguridad() {
    return (
        <section>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
        <div className="bg-seguridad-background bg-cover bg-center absolute top-0 w-full h-[40rem]" />
        {/* responsive */}
        <div className="container max-w-8xl relative mx-auto">

           
                <div className=' grid grid-cols-2 text-gray-200'>
                  
                   {/* divs del grid */}
                   <div className=''>
                     <div className="flex flex-wrap relative ">
                    <div className="w-80 h-[25rem]  mx-auto flex justify-center mt-24 lg:mt-0">
              
                        <Card> 
                        <div>
                            <CardImage className='rounded-full' alt="Card Image" src={Seguridadimg} /></div>
                            <CardBody className='md:auto text-center'>
                                <a className='mb-4 text-gray-900 text-xl font-serif font-semibold' href='/servicios'>Sistemas De Seguridad Y Videovigilancia</a>
                                <div className='mt-4'>
                                <Paragraph color="blueGray">
                                Lo más importante es la seguridad de tu casa o negocio, por lo que 
                                tenemos los mejores sistemas de seguridad e intrusión y control de acceso.
                                </Paragraph>
                                </div>
                            </CardBody>
                        </Card>
            
                   
                   </div>
                   </div>
                   </div>
                    {/* divs del grid */}
            <div className='w-[30rem] h-32  mt-20 mr-10 ml-10 text-md font-bold'> 
                <H3 color="white" >Seguridad</H3>
                   <p >
                    Así mismo contamos con sistemas de alarmas inalámbricos, 
                    con sensores de movimiento, sensores de puerta / ventana, 
                    controles remotos, sirena para interior y exterior, administrables 
                    desde tu dispositivo móvil por lo que podrás monitorear el estado de tu alarma, 
                    activar o desactivar remotamente.</p>
                    <p>
                    Cámaras de seguridad AHD las cuales podrás monitorear desde cualquier lugar 
                    con tus dispositivos móviles y desde tu computadora, ofreciéndote un servicio 
                    profesional y de calidad.
                    </p>
                </div>
                   
                   
               
                    </div>
                        </div>
                        
    </div>
    </section>
    

       );
}
