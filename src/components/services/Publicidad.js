import Publicidadimg from 'assets/img/publicidad2.jpg';
import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Paragraph from '@material-tailwind/react/Paragraph';
import H3 from '@material-tailwind/react/Heading3';

export default function Publicidad() {
    return (
        <section>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
        <div className="bg-publicidad-background bg-cover bg-center absolute top-0 w-full h-[40rem]" />
        {/* responsive */}
        <div className="container max-w-8xl relative mx-auto">

           
                <div className=' grid grid-cols-3 text-gray-200'>
                  {/* divs del grid */}
                   <div className='w-[24rem] h-32 self-stretch mt-8 ml-10 text-md font-bold '> 
                   <H3 color="white" >Publicidad</H3>
                   <p >
                    Actualmente cada vez más personas tienen acceso a la internet, 
                    ya sea por medio de una computadora, un celular y hasta por la televisión.
                    La publicidad online puede llegar a un gran número de personas, 
                    invirtiendo pocos recursos y obteniendo la mayor cantidad de beneficios posibles.
                   </p>  <br/>
                   <p>
                 
                    Diseñamos tu imagen corporativa, logotipos, membretes, tarjetas de presentación, 
                    volantes, lonas y otros formatos.
                   </p>
                   </div>

                   
                    {/* divs del grid */}
                <div className=' w-96 h-32 self-stretch mt-8 ml-32'>
                    <H3 color="white">Servicios</H3>
                        <ul className='font-bold list-disc'>
                            <li>Redes sociales</li>
                            <li>E-Mail marketing</li>
                            <li>Google Adwords</li>
                            <li>Videos publicitarios</li>
                            <li>Banners</li>
                            <li>Móviles</li>
                            <li>Blogs</li>
                        </ul>
                       
                    </div>
                    




                   {/* divs del grid */}
                   <div className=''>
                     <div className="flex flex-wrap relative ">
                    <div className="w-80 h-[25rem]  mx-auto flex justify-center mt-24 lg:mt-0">
                    <Card> 
                        <div>
                            <CardImage className='rounded-full' alt="Card Image" src={Publicidadimg} /></div>
                            <CardBody className=' text-center'>
                                <a className='mb-4 text-gray-900 text-xl font-serif font-semibold' href='/servicios'>Publicidad</a>
                                <div className='mt-4'>
                                <Paragraph color="blueGray">
                                Diseñamos tu imagen corporativa, logotipos, membretes, tarjetas de presentación, 
                                volantes, lonas y otros formatos..
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
