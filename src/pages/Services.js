import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
// import Header from 'components/profile/Header';
// import Content from 'components/profile/Content';
import Content from 'components/services/Content';
import Header from 'components/services/Header';
import Seguridad from 'components/services/Seguridad';
import Redes from 'components/services/Redes';
import Licencias from 'components/services/Licencias';
import Venta from 'components/services/Venta';
import Diseño from 'components/services/Diseño';
import Publicidad from 'components/services/Publicidad';




export default function Services() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <Content />
                <Seguridad/>
                <Redes/>
                <Licencias/>
                <Venta/>
                <Diseño/>
                <Publicidad/>
            </main>
            <DefaultFooter />
        </>
    );
}
