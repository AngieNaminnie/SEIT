import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/landing/Header';
import WorkingSection from 'components/landing/WorkingSection';
import TeamSection from 'components/landing/TeamSection';
import ContactSection from 'components/landing/ContactSection';
import ClientsCarousel from 'components/landing/ClientsCarousel';
import MapCard from 'components/landing/MapCard';
import Form from 'components/landing/Form';
import ProyectSection from 'components/landing/ProyectSection';


export default function Landing() {
    return (
        <>
            <div className="absolute w-full z-20">
                 <DefaultNavbar /> 
            </div>
            <main>
                <Header />
                <WorkingSection />
            <ClientsCarousel></ClientsCarousel>
                <TeamSection />
                <ContactSection />
                <MapCard/>
                <Form></Form>
               
           
                
            </main>
            <DefaultFooter />
        </>
    );
}
