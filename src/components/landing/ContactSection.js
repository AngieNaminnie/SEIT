import Title from 'components/landing/Title';
import ContactCard from 'components/landing/ContactCard';
import Form from 'components/landing/Form';
import Mouse from 'assets/img/Mouse.jpg';
import P1 from 'assets/img/proyecto1.png';
import P2 from 'assets/img/proyecto2.jpg';
import P3 from 'assets/img/proyecto3.jpg';
import P4 from 'assets/img/proyecto4.jpg';
import P5 from 'assets/img/proyecto5.jpg';
import P6 from 'assets/img/proyecto6.jpg';
  


        // ********Proyecto*********//
export default function ContactSection() {
    return (
        <section className="pb-20 relative block bg-gray-100 ">
            <div className="container max-w-2xl mx-auto px-4 lg:pt-24  ">
                <Title heading="Proyectos" />
                          
                
                    <div className='grid grid-cols-4 gap-4 '>
                
                    <div className='h-64'>
                        <a href='/proyecto'>
                    <img className='w-full h-full'
                              src={P3}
                              />
                        </a>
                    </div>
                    <div className='h-64'>
                        <a href='/proyecto'>
                    <img className='w-full h-full'
                              src={P2}
                              />
                        </a>
                    </div>
                    <div className='h-64 col-span-2'>
                        <a href='/proyecto'>
                    <img className='w-full h-full'
                              src={P1}
                              />
                        </a>
                    </div>
                    <div className='h-64 col-span-2'>
                        <a href='/proyecto'>
                    <img className='w-full h-full'
                              src={P4}
                              />
                        </a>
                    </div>
                    <div className='h-64'>
                        <a href='/proyecto'>
                    <img className='w-full h-full'
                              src={P5}
                              />
                        </a>
                    </div>
                    <div className='h-64'>
                        <a href='/proyecto'>
                    <img className='w-full h-full'
                              src={P6}
                              />
                        </a>
                    </div>
                    
                
                    </div>
                          
                        </div>
                    </section>
                );
}
