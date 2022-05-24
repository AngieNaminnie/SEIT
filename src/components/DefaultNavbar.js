import { useLocation } from 'react-router-dom';
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
import NavbarInput from '@material-tailwind/react/NavbarInput';
import Image from '@material-tailwind/react/Image';
import ProfilePicture from 'assets/img/team-1-800x800.jpg';

export default function DefaultNavbar({ showDefaultNavbar, setShowDefaultNavbar }) {
    const [openNavbar, setOpenNavbar] = useState(false);
    const location= useLocation().pathname;
    
    return (
       <NavbarBrand color="" navbar>
            <Navbar color="transparent">
                <NavbarWrapper >
                {/* <nav className=" md:ml-1 py-1 px-1"></nav>  
                 <div className="container max-w-full mx-auto flex items-center justify-between md:pr-1 md:pl-1"> </div>  
                 <div className="md:hidden"></div>   */}
                <Button
                        color="transparent"
                        buttonType="link"
                        size="sm"
                        iconOnly
                        rounded
                        ripple="light"
                        onClick={() => setShowDefaultNavbar('left-0')}
                    >
                        {/* <Icon name="menu" size="2xl" color="white" /> */}
                    </Button>
                    
                        {/* <NavbarBrand></NavbarBrand> */}
                    {/* <NavbarToggler */}
                        {/* onClick={() => setOpenNavbar(!openNavbar)} */}
                        {/* color="white" */}

                         
                    {/* /> */}
                    
                    {/* <div className="flex justify-between items-center w-full"></div> */}
                     <h4 className="uppercase text-white text-sm tracking-wider mt-1"> 
                        {location === '/'
                            ? ''
                            : location.toUpperCase().replace('/', '')}
                     </h4>
                </NavbarWrapper>


                 {/* <NavbarCollapse open={openNavbar}>  {/*
                    {/* <Nav> */}
                    {/* <div className="flex"> */}
                        {/* <NavbarInput placeholder="Search" /> */}

                        {/* <div className="-mr-1 ml-1"> */}
                            <Dropdown
                                color="transparent"
                                buttonText={
                                    <div className="w-20 ">
                                        <Image src={ProfilePicture} rounded />
                                    </div>
                                }
                                rounded
                                style={{
                                    padding: 0,
                                    color: 'transparent',
                                }}
                            >
                                <DropdownItem color="red">
                                   Inicio
                                </DropdownItem>
                                <DropdownItem color="red">
                                   Servicios
                                </DropdownItem>
                                <DropdownItem color="red">
                                   Clientes
                                </DropdownItem>
                                <DropdownItem color="red">
                                   Tienda
                                </DropdownItem>
                                <DropdownItem color="red">
                                    Proyectos
                                </DropdownItem>
                                <DropdownItem color="red">
                                    Contacto
                                </DropdownItem>
                            </Dropdown>
                        {/* </div> */}
    
            </Navbar>
        </NavbarBrand>
    );
}

