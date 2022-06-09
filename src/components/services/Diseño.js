import Diseñoimg from 'assets/img/diseño.jpg';
import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Paragraph from '@material-tailwind/react/Paragraph';
import H3 from '@material-tailwind/react/Heading3'



export default function Diseño() {
    return (
        <section>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
        <div className="bg-diseño-background bg-cover bg-center absolute top-0 w-full h-[40rem]" />
        {/* responsive */}
        <div className="container max-w-8xl relative mx-auto">

           
                <div className=' grid grid-cols-2 text-gray-200'>
                  
                   {/* divs del grid */}
                   <div className=''>
                     <div className="flex flex-wrap relative ">
                    <div className="w-80 h-[25rem]  mx-auto flex justify-center mt-24 lg:mt-0">
                    <Card> 
                            <div>
                            <CardImage className='rounded-full' alt="Card Image" src={Diseñoimg} /></div>
                            <CardBody className=' text-center'>
                                <a className='mb-4 text-gray-900 text-xl font-serif font-semibold' href='/servicios'>Diseño Web</a>
                                <div className='mt-4'>
                                <Paragraph color="blueGray">
                                Diseñamos tu página web, desde sitios publicitarios, galerías de imágenes, 
                                plataformas de tienda en línea, educativas, redes sociales, publicidad en redes sociales.
                                </Paragraph>
                                </div>
                            </CardBody>
                            </Card>
                   
                   </div>
                   </div>
                   </div>
                    {/* divs del grid */}
                 <div className='w-[32rem] h-32  mt-8 mr-10 ml-10 text-md font-bold'> 
                 <H3 color="white" >Diseño web</H3>
                   <p>
                   Diseñamos tu página web, desde sitios publicitarios, galerías de imágenes,
                    plataformas de tienda en línea, educativas, redes sociales, publicidad 
                    en redes sociales.
                   </p><br/>
                   <p>
                   Contamos también con servicio de hosting y registro de dominios, campañas 
                   publicitarias Adwords, registro en Google Maps y muchas otras herramientas 
                   que complementan tu página web.
                   </p><br/>
                   <p>
                   Ademas de estadísticas web, blogs, correo electrónico empresarial, 
                   bases de datos, más de 100 aplicaciones y webmail. 
                   </p>
                </div>
                   
                 
                    </div>
                        </div>
                        
    </div>
    </section>
    

       );
}