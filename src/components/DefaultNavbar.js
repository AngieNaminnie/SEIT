import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavLink from '@material-tailwind/react/NavLink';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import Icon from '@material-tailwind/react/Icon';
import Button from '@material-tailwind/react/Button';
import NavbarInput from '@material-tailwind/react/NavbarInput';
import Image from '@material-tailwind/react/Image';
import ProfilePicture from 'assets/img/logo_seit.png';
import { BrowserRouter, Switch  } from 'react-router-dom';





export default function DefaultNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <Navbar color="transparent" navbar>
            <NavbarContainer>
                
            <div className="text-white "> 
              <Dropdown
                  color="transparent"
                  buttonText={
                      <div className="w-20 flex m-0 ">
                          <Image src={ProfilePicture} rounded />
                           <Icon name="menu" size="2xl" color="white" />
                           
                      </div>   
                      
                  }
                  rounded
                  style={{
                   padding: 0,
                   color: 'transparent',
                  }}
                  ripple="light" 
                  ><div/>
                 
                  <Link to="/" >
                      <DropdownItem color="red">
                         Inicio
                      </DropdownItem>
                  </Link>
                  <Link to="/services">
                      <DropdownItem color="red">
                          Servicios
                      </DropdownItem>
                  </Link>
                  <Link to="/clientes" >
                      <DropdownItem color="red" >
                          Clientes
                      </DropdownItem>
                  </Link>
                  <a href='https://www.tienda.seitgdl.com.mx/'>
                      <DropdownItem color="red">
                          Tienda
                      </DropdownItem>
                  </a>
                  <Link to="/proyectos">
                      <DropdownItem color="red">
                          Proyectos
                      </DropdownItem>
                  </Link>
                  <Link to="/contacto">
                      <DropdownItem color="red">
                          Contactos
                      </DropdownItem>
                  </Link>
              </Dropdown>
              
          </div>
              
            </NavbarContainer>
        </Navbar>
       
    );
}

