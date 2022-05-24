import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Icon from '@material-tailwind/react/Icon';
import H2 from '@material-tailwind/react/Heading2'
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import StatusCard from 'components/landing/StatusCard';
import Teamwork from 'assets/img/teamwork.jpeg';
import Soporte from 'assets/img/soporte.jpg';
import Seguridad from 'assets/img/seguridad.jpg';
import Redes from 'assets/img/redes.jpg';
import Licencias from 'assets/img/licencias.jpg';
import Diseño from 'assets/img/diseño.jpg';
import Publicidad from 'assets/img/publicidad2.jpg';
import Computo from 'assets/img/venta.jpg';




export default function WorkingSection() {
    return ( 
        <section className="pb-20 bg-gray-100 ">
            {/* Servicios */}
            <div class='h-10 text-center mt-2 '>
            <H2 >Servicios</H2>  
            </div>

        <div className="container max-w-xl mx-auto px-4 m-20 mb-2">
                
                <div className="flex flex-wrap relative z-50">
                <div className="w-full md:w-3/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        {/* Soporte */}
                        <Card> 
                        <div>
                            <CardImage className='rounded-full' alt="Card Image" src={Soporte} /></div>
                            <CardBody className=' text-center' >
                           
                                {/* <H6 color="gray">Soporte Técnico</H6> */}
                                <a className='mb-4 text-xl font-serif font-semibold' href='#'>Soporte Técnico</a>

                                <div className='mt-4'>
                                <Paragraph color="blueGray">
                                En SEIT nos especializamos en el mantenimiento preventivo 
                                y correctivo de equipo de cómputo.
                            
                                </Paragraph>
                                </div>
                            </CardBody>
                        </Card>
                        </div>
                        {/* Sistema seguridad */}
                        <div className="w-full md:w-3/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card> 
                        <div>
                            <CardImage className='rounded-full' alt="Card Image" src={Seguridad} /></div>
                            <CardBody className='md:auto text-center'>
                                <a className='mb-4 text-xl font-serif font-semibold' href='#'>Sistemas De Seguridad Y Videovigilancia</a>
                                <div className='mt-4'>
                                <Paragraph color="blueGray">
                                Lo más importante es la seguridad de tu casa o negocio, por lo que 
                                tenemos los mejores sistemas de seguridad e intrusión y control de acceso.
                                </Paragraph>
                                </div>
                            </CardBody>
                        </Card>
                        </div>
                        {/* redes*/}
                        <div className="w-full md:w-3/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                            <Card> 
                            <div>
                            <CardImage className='rounded-full' alt="Card Image" src={Redes} /></div>
                            <CardBody className=' text-center'>
                                <a className='mb-4 text-xl font-serif font-semibold' href='#'>Instalación Y Configuración De Redes</a>
                                <div className='mt-4'>
                                <Paragraph color="blueGray">
                                En el caso de las redes alámbricas e inalámbricas, ofrecemos soluciones 
                                en cableado estructurado y conectividad inalámbrica.
                                </Paragraph>
                                </div>
                            </CardBody>
                            </Card>
                            </div>
                        {/* licenciamiento */}
                        <div className="w-full md:w-3/12 px-2 mx-auto flex justify-center mt-24 lg:mt-0">
                            <Card> 
                            <div>
                            <CardImage className='rounded-full' alt="Card Image" src={Licencias} /></div>
                            <CardBody className=' text-center'>
                                <a className='mb-4 text-xl font-serif font-semibold' href='#'>Programas Y Licenciamiento</a>
                                <div className='mt-4'>
                                <Paragraph color="blueGray">
                                Contamos con paqueterías de software administrativo, sistemas operativos,
                                diseño y multimedia, desarrollo, contables, software POS, entre otros.
                                </Paragraph>
                                </div>
                            </CardBody>
                            </Card>
                        </div>

                        {/* Segundo bloque */}
                          
                    <div className="container max-w-10xl mx-auto px-4 m-20">
                     {/* Venta de computo*/} 
                        <div className="flex flex-wrap relative z-50">
                        <div className="w-full md:w-3/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                            <Card> 
                            <div>
                            <CardImage className='rounded-full' alt="Card Image" src={Computo} /></div>
                            <CardBody className=' text-center'>
                                <a className='mb-4 text-xl font-serif font-semibold' href='#'>Venta De Equipo De Computo</a>
                                <div className='mt-4'>
                                <Paragraph color="blueGray">
                                Contamos con una amplia gama de productos y nuestros precios 
                                son competitivos al igual que las marcas que manejamos.
                                </Paragraph>
                                </div>
                            </CardBody>
                            </Card>
                            </div>

                             {/* Diseño web */}
                             <div className="w-full md:w-3/12 px-2 mx-auto flex justify-center mt-24 lg:mt-0">
                            <Card> 
                            <div>
                            <CardImage className='rounded-full' alt="Card Image" src={Diseño} /></div>
                            <CardBody className=' text-center'>
                                <a className='mb-4 text-xl font-serif font-semibold' href='#'>Diseño Web</a>
                                <div className='mt-4'>
                                <Paragraph color="blueGray">
                                Diseñamos tu página web, desde sitios publicitarios, galerías de imágenes, 
                                plataformas de tienda en línea, educativas, redes sociales, publicidad en redes sociales.
                                </Paragraph>
                                </div>
                            </CardBody>
                            </Card>
                            </div>
                                {/* Publicidad */}
                            <div className="w-full md:w-3/12 px-2 mx-auto flex justify-center mt-24 lg:mt-0">
                            <Card> 
                            <div>
                            <CardImage className='rounded-full' alt="Card Image" src={Publicidad} /></div>
                            <CardBody className=' text-center'>
                                <a className='mb-4 text-xl font-serif font-semibold' href='#'>Publicidad</a>
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
        </section>


       


    );
}
