import Licenciasimg from 'assets/img/licencias.jpg';
import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Paragraph from '@material-tailwind/react/Paragraph';
import H3 from '@material-tailwind/react/Heading3'



export default function Licencias() {
    return (
        <section>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
        <div className="bg-licencia-background bg-cover bg-center absolute top-0 w-full h-[40rem]" />
        {/* responsive */}
        <div className="container max-w-8xl relative mx-auto">

           
                <div className=' grid grid-cols-2 text-gray-200'>
                  
                   {/* divs del grid */}
                   <div className=''>
                     <div className="flex flex-wrap relative ">
                    <div className="w-80 h-[25rem]  mx-auto flex justify-center mt-24 lg:mt-0">
                    <Card> 
                            <div>
                            <CardImage className='rounded-full' alt="Card Image" src={Licenciasimg} /></div>
                            <CardBody className=' text-center'>
                                <a className='mb-4 text-gray-900 text-xl font-serif font-semibold' href='/servicios'>Programas Y Licenciamiento</a>
                                <div className='mt-4'>
                                <Paragraph color="blueGray">
                                Contamos con paqueterías de software administrativo, sistemas operativos,
                                diseño y multimedia, desarrollo, contables, software POS, entre otros.
                                </Paragraph>
                                </div>
                            </CardBody>
                            </Card>
                   
                   </div>
                   </div>
                   </div>
                    {/* divs del grid */}
                 <div className='w-[32rem] h-32  mt-8 mr-10 ml-5'> 
                 <H3 color="white">Programas y Licenciamiento</H3>
                   <p className='text-md font-bold'>
                    Contamos con paqueterías de software administrativo, sistemas operativos, 
                    diseño y multimedia, desarrollo, contables, software POS, entre otros. </p>
                    <br/>
                    <ul className='font-bold list-disc'>
                       <li>Los programas con software original funcionan correctamente,
                           sin anomalías ni deficiencias. 
                           También son más seguros para los usuarios.</li>
                        <li>Con el software original y sus actualizaciones periódicas se 
                            rebaja significativamente el riesgo ante virus y malware
                            (software dañino). De esta manera se minimiza el riesgo de 
                            perder información.</li>
                        <li>El uso de software original conlleva el acceso al soporte, 
                            la asistencia técnica y el servicio del fabricante y sus canales
                            de venta oficiales.</li>
                        </ul>
                         </div>
                   
                 
                    </div>
                        </div>
                        
    </div>
    </section>
    

       );
}