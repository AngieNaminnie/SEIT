import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import React from 'react';
import proyecto1 from 'assets/img/proyecto1.png';
import proyecto2 from 'assets/img/proyecto2.jpg';
import proyecto3 from 'assets/img/proyecto3.jpg';
import proyecto4 from 'assets/img/proyecto4.jpg';
import proyecto5 from 'assets/img/proyecto5.jpg';
import proyecto6 from 'assets/img/proyecto6.jpg';

// ********Proyectos pagina extra********//
export default function ContactSection() {
    return (
        <div className='mt-20 m-8'>
        <Card>
            <CardHeader color="red" contentPosition="center">
                <a href='/'><h2 className="text-white text-3xl">Proyectos</h2></a>
            </CardHeader><br/><br/><br/> 
            <div className='grid grid-cols-3 mt-0'>
            <div class="max-w-sm rouded overflow-hidden shadow-lg">
                <img src={proyecto1} alt="" className="w-full h-72"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-dark-500 text-xl mb-2">     
                        Vista de cámaras                    
                    </div>
                    <ul>
                        <li>
                            <strong>Descripción: </strong>
                            Cámaras de seguridad AHD las cuales podrás monitorear desde cualquier lugar con tus dispositivos móviles 
                            y desde tu computadora, ofreciéndote un servicio profesional y de calidad.
                        </li>
                    </ul>
                </div>
            </div>
            <div class="max-w-sm rouded overflow-hidden shadow-lg">
                <img src={proyecto2} alt="" className="w-full h-72"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-dark-500 text-xl mb-2">     
                        Seguridad                    
                    </div>
                    <ul>
                        <li>
                            <strong>Descripción: </strong>
                            Lo más importante es la seguridad de tu casa o negocio, 
                            por lo que tenemos los mejores sistemas de seguridad e intrusión y control de acceso.
                        </li>
                    </ul>
                </div>
            </div>
            <div class="max-w-sm rouded overflow-hidden shadow-lg">
                <img src={proyecto4} alt="" className="w-full h-72"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-dark-500 text-xl mb-2">     
                            Equipo                
                    </div>
                    <ul>
                        <li>
                            <strong>Descripción: </strong>
                            realizamos un análisis para diagnosticar cualquier problema de conectividad, 
                            dando solución y buscando áreas donde se pueda mejorar la infraestructura de red, 
                            ofreciendo soluciones en cableado estructurado y conectividad inalámbrica.
                        </li>
                    </ul>
                </div>
            </div>
            <div class="max-w-sm rouded overflow-hidden shadow-lg mt-9">
                <img src={proyecto5} alt="" className="w-full h-72"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-dark-500 text-xl mb-2">     
                            Equipo de instalación                
                    </div>
                    <ul>
                        <li>
                            <strong>Descripción: </strong>
                            Integramos tecnología de última generación en alarmas y monitoreo que te brindan mayor desempeño y seguridad,
                            además de la posibilidad de añadir sistemas y/o dispositivos de automatización.
                        </li>
                    </ul>
                </div>
            </div>
            <div class="max-w-sm rouded overflow-hidden shadow-lg mt-8">
                <img src={proyecto3} alt="" className="w-full h-72"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-dark-500 text-xl mb-2">     
                            Cámaras instaladas               
                    </div>
                    <ul>
                        <li>
                            <strong>Descripción: </strong>
                            Contamos con sistemas de alarmas inalámbricos, con sensores de movimiento, 
                            sensores de puerta / ventana, controles remotos, sirena para interior y exterior, 
                            administrables desde tu dispositivo móvil por lo que podrás monitorear el estado de tu alarma, 
                            activar o desactivar remotamente.
                        </li>
                    </ul>
                </div>
            </div>
            <div class="max-w-sm rouded overflow-hidden shadow-lg mt-8">
                <img src={proyecto6} alt="" className="w-full h-72"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-dark-500 text-xl mb-2">     
                            Equipo en proceso                
                    </div>
                    <ul>
                        <li>
                            <strong>Descripción: </strong>
                            Gracias a la cobertura que ofrecen estos sistemas de vigilancia, 
                            tendrás todas las zonas de acceso cubiertas con un servicio totalmente controlado para evitar el acceso de intrusos.
                            El circuito cerrado de cámaras de vigilancia ofrece un apoyo a la logística de protección mucho más 
                            eficiente que otros sistemas de vigilancia convencionales.
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </Card>
        </div>
        
        
    );
}