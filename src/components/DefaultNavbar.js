import { useState } from 'react';
import { Link } from 'react-router-dom';
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

export default function DefaultNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <NavbarBrand color="black" navbar>
            <Navbar>
                <NavbarWrapper>
                    <a
                     section className="pb-10 bg-gray-10 ">
                     <div class='h-1 text-left mt-1 '>
                       
                     </div>
                
                    
                        <NavbarBrand>SEIT</NavbarBrand>
                    </a>
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        color="white"
                    />
                </NavbarWrapper>


                <NavbarCollapse open={openNavbar}>
                    <Nav>
                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                    <span class="inline-block align-baseline ...">...</span>    
                            <NavLink
                                href="https://material-tailwind.com/documentation/quick-start?ref=mtk"
                                svg class="w-5 h-5 text-white-500 transition duration-75 dark:text-white-400 group-hover:text-white-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 200"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                                
 
                               >
                                &nbsp;Inicio
                            </NavLink>
                            <NavLink
                                href=""
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                               
                                &nbsp;Servicios
                            </NavLink> <NavLink
                                href=""
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                
                                &nbsp;Clientes
                            </NavLink>
                            <div className="text-white">
                                <Dropdown
                                    color="transparent"
                                    size="sm"
                                    buttonType="link"
                                    buttonText={
                                        <div className="py-2.5 font-medium flex items-center">
                                            <Icon
                                                name="view_carousel"
                                                size="2xl"
                                                color="white"
                                            />
                                            <span className="ml-2">
                                                Tienda
                                            </span>
                                        </div>
                                    }
                                    ripple="light"
                                >
                                    <Link to="/mouses">
                                        <DropdownItem color="lightBlue">
                                            Mouses
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/teclados">
                                        <DropdownItem color="lightBlue">
                                            Teclados
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/audifonos">
                                        <DropdownItem color="lightBlue">
                                            Audifonos
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/cables">
                                        <DropdownItem color="lightBlue">
                                            Cables
                                        </DropdownItem>
                                    </Link>
                                </Dropdown>
                            </div>
                            <NavLink
                                href=""
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                               
                                &nbsp;Proyectos
                            </NavLink>
                            <NavLink 
                                href=""
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            > 
                                 Contacto 
                              </NavLink>  
                              <a  
                                href="/home/sarahi/Escritorio/Proyecto_SEIT/src/components/landing/Form.js"
                                target="_blank"
                                rel="noreferrer"
                              >  
                                  </a> 
                        </div>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        </NavbarBrand>
    );
}

