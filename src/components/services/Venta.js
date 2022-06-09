import Computo from 'assets/img/venta.jpg';
import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Paragraph from '@material-tailwind/react/Paragraph';
import H3 from '@material-tailwind/react/Heading3';

export default function Venta() {
    return (
        <section>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
        <div className="bg-venta-background bg-cover bg-center absolute top-0 w-full h-[40rem]" />
        {/* responsive */}
        <div className="container max-w-8xl relative mx-auto">

           
                <div className=' grid grid-cols-3 text-gray-200'>
                  {/* divs del grid */}
                   <div className='w-[26rem] h-32 self-stretch mt-20 ml-5 '> 
                   <H3 color="white" >Venta</H3>
                   <p className='text-md font-bold'>
                    Contamos con una amplia gama de productos y nuestros precios 
                    son competitivos al igual que las marcas que manejamos, como son, 
                    Acer, Acteck, Adata, AOC, Apple Asrock, Asus. Toshiba, HP, DELL, 
                    Asus, Kingston, EC-Line, Manhattan, entre otros.
                    </p>
                   </div>

                        {/* divs del grid */}
                    <div className=' w-96 h-32 self-stretch mt-20 ml-32'>
                    <H3 color="white">Productos</H3>
                        <ul className='font-bold list-disc text-md'>
                       <li>Impresoras</li>
                        <li>Memorias</li>
                        <li>Accesorios</li>
                        <li>Puntos de venta</li>
                        <li>Equipo Gaming</li>
                        </ul>
                       
                    </div>



                   {/* divs del grid */}
                   <div className=''>
                     <div className="flex flex-wrap relative ">
                    <div className="w-80 h-[25rem]  mx-auto flex justify-center mt-24 lg:mt-0">
                    <Card> 
                            <div>
                            <CardImage className='rounded-full' alt="Card Image" src={Computo} /></div>
                            <CardBody className=' text-center'>
                                <a className='mb-4 text-gray-900 text-xl font-serif font-semibold' href='/servicios'>Venta De Equipo De Computo</a>
                                <div className='mt-4'>
                                <Paragraph color="blueGray">
                                Contamos con una amplia gama de productos y nuestros precios 
                                son competitivos al igual que las marcas que manejamos.
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
