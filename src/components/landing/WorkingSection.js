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

        <div className="container max-w-7xl mx-auto px-4 m-20">
                
                <div className="flex flex-wrap relative z-50">
                <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        {/* Soporte */}
                        <Card> 
                        <div>
                            <CardImage className='rounded-full' alt="Card Image" src={Soporte} /></div>
                            <CardBody className=' text-center'   >
                                <H6 color="gray">Soporte Técnico</H6>
                                <Paragraph color="blueGray">
                                En SEIT nos especializamos en el mantenimiento preventivo 
                                y correctivo de equipo de cómputo.
                                   
                                </Paragraph>
                            </CardBody>
                        </Card>
                        </div>
                        {/* Sistema seguridad */}
                        <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card> 
                        <div>
                            <CardImage className='rounded-full' alt="Card Image" src={Seguridad} /></div>
                            <CardBody className=' text-center'   >
                                <H6 color="gray">Sistemas De Seguridad Y Videovigilancia</H6>
                                <Paragraph color="blueGray">
                                Lo más importante es la seguridad de tu casa o negocio, por lo que 
                                tenemos los mejores sistemas de seguridad e intrusión y control de acceso.
                                </Paragraph>
                            </CardBody>
                        </Card>
                        </div>
                        {/* redes*/}
                        <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                            <Card> 
                            <div>
                            <CardImage className='rounded-full' alt="Card Image" src={Redes} /></div>
                            <CardBody className=' text-center'   >
                                <H6 color="gray">Instalación Y Configuración De Redes</H6>
                                <Paragraph color="blueGray">
                                En el caso de las redes alámbricas e inalámbricas, ofrecemos soluciones 
                                en cableado estructurado y conectividad inalámbrica.
                                </Paragraph>
                            </CardBody>
                            </Card>
                            </div>
                        {/* Segundo bloque */}
                             {/* licenciamiento */}
                        <div className="container max-w-10xl mx-auto px-2 mt-20">  
                        <div className="flex flex-row relative z-50">  
                        <div className="w-full md:w-4/12 px-2 mx-auto flex justify-center mt-24 lg:mt-0">
                            <Card> 
                            <div>
                            <CardImage className='rounded-full' alt="Card Image" src={Licencias} /></div>
                            <CardBody className=' text-center'   >
                                <H6 color="gray">Programas Y Licenciamiento</H6>
                                <Paragraph color="blueGray">
                                Contamos con paqueterías de software administrativo, sistemas operativos,
                                diseño y multimedia, desarrollo, contables, software POS, entre otros.
                                </Paragraph>
                            </CardBody>
                            </Card>
                            </div>
                            {/* Venta de computo*/}
                            <div className="w-full md:w-4/12 px-2 mx-auto flex justify-center mt-24 lg:mt-0">
                            <Card> 
                            <div>
                            <CardImage className='rounded-full' alt="Card Image" src={Computo} /></div>
                            <CardBody className=' text-center'   >
                                <H6 color="gray">Venta De Equipo De Computo</H6>
                                <Paragraph color="blueGray">
                                Contamos con una amplia gama de productos y nuestros precios 
                                son competitivos al igual que las marcas que manejamos.
                                </Paragraph>
                            </CardBody>
                            </Card>
                            </div>

                             {/* Diseño web */}
                             <div className="w-full md:w-4/12 px-2 mx-auto flex justify-center mt-24 lg:mt-0">
                            <Card> 
                            <div>
                            <CardImage className='rounded-full' alt="Card Image" src={Diseño} /></div>
                            <CardBody className=' text-center'   >
                                <H6 color="gray">Diseño Web</H6>
                                <Paragraph color="blueGray">
                                Diseñamos tu página web, desde sitios publicitarios, galerías de imágenes, 
                                plataformas de tienda en línea, educativas, redes sociales, publicidad en redes sociales.
                                </Paragraph>
                            </CardBody>
                            </Card>
                            </div>
                                {/* Publicidad */}
                            <div className="w-full md:w-4/12 px-2 mx-auto flex justify-center mt-24 lg:mt-0">
                            <Card> 
                            <div>
                            <CardImage className='rounded-full' alt="Card Image" src={Publicidad} /></div>
                            <CardBody className=' text-center'   >
                                <H6 color="gray">Publicidad</H6>
                                <Paragraph color="blueGray">
                                Diseñamos tu imagen corporativa, logotipos, membretes, tarjetas de presentación, 
                                volantes, lonas y otros formatos..
                                </Paragraph>
                            </CardBody>
                            </Card>
                            </div>
                            
                            </div>
                            </div>
                </div>

                {/** Seccion de clientes **/}
                <section>
                    <div class='grid'>
                    <div class=' justify-items-center p-10 mt-20 w-72 h-24 rounded-lg bg-red-700 shadow-2xl '>
                    </div>
                    </div>
                    
                </section>
           
 




                {/* <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <Icon name="people" size="3xl" />
                        </div>
                        <H4 color="gray">Working with us is a pleasure</H4>
                        <LeadText color="blueGray">
                            Don't let your uses guess by attaching tooltips and
                            popoves to any element. Just make sure you enable
                            them first via JavaScript.
                        </LeadText>
                        <LeadText color="blueGray">
                            The kit comes with three pre-built pages to help you
                            get started faster. You can change the text and
                            images and you're good to go. Just make sure you
                            enable them first via JavaScript.
                        </LeadText>
                        <a
                            href="#pablo"
                            className="font-medium text-light-blue-500 mt-2 inline-block"
                        >
                            Read More
                        </a>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card>
                            <CardImage alt="Card Image" src={Teamwork} />
                            <CardBody>
                                <H6 color="gray">Top Notch Services</H6>
                                <Paragraph color="blueGray">
                                    The Arctic Ocean freezes every winter and
                                    much of the sea-ice then thaws every summer,
                                    and that process will continue whatever
                                    happens.
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                </div> */}
            </div>
        </section>


       


    );
}
