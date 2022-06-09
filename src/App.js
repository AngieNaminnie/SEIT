import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from 'pages/Landing';
//import Profile from 'pages/Profile';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Services from 'pages/Services';
import Working from 'components/landing/WorkingSection';
import Soporte from 'components/services/Content';
import Seguridad from 'components/services/Seguridad';
import Redes from 'components/services/Redes';
import Diseño from 'components/services/Diseño';
import Publicidad from 'components/services/Publicidad';
import Licencias from 'components/services/Licencias';
import Venta from 'components/services/Venta';
import Proyecto from 'components/landing/ProyectSection';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';


function App() {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/servicios" component={Working} />
            <Route exact path="/proyecto" component={Proyecto} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/soporte" component={Soporte} />
            <Route exact path="/seguridad" component={Seguridad} />
            <Route exact path="/redes" component={Redes} />
            <Route exact path="/diseño" component={Diseño} />
            <Route exact path="/publicidad" component={Publicidad} />
            <Route exact path="/licencias" component={Licencias} />
            <Route exact path="/productos" component={Venta} />
            
            <Redirect from="*" to="/" />
        </Switch>
    );
}

export default App;
