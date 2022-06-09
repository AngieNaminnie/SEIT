import H3 from '@material-tailwind/react/Heading3';
import Paragraph from '@material-tailwind/react/Paragraph';
import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';
import Button from '@material-tailwind/react/Button';
//import { Card } from '@material-tailwind/react';
//import PersonIcon from '@mui/icons-material/Person';
//import { Icon } from '@material-tailwind/react';
import Card from '@material-tailwind/react/Card';
import CardBody  from '@material-tailwind/react/CardBody';
import CardHeader  from '@material-tailwind/react/CardHeader';
import Icon from '@material-tailwind/react/Icon';
import { InputIcon } from '@material-tailwind/react';



export default function Form() {
    return (
        <div className="flex flex-wrap justify-center mt-24 bg-gray-100 ">
            <div className="w-full lg:w-8/12 px-4 ">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                    <div className="flex-auto p-5 lg:p-10">
                        <div className="w-full text-center mb-20">
                            <H3 color="gray">Contactanos</H3>
                        </div>

                    <Card>
                        <CardHeader color="red" >
                            <div className="w-full flex items-center justify-between">
                                <h2 className="text-white text-4xl text-center font-medium">Formulario</h2>
                                <Button
                                    color="transparent"
                                    buttonType="link"
                                    size="lg"
                                    style={{ padding: 0 }}
                                >
                                </Button>
                                </div>
                            
                        </CardHeader>
                        <CardBody>
                    
                        {/*Seccion de contactanos*/}
                        <form onSubmit={(e) => e.preventDefault()}>
                        
                    <div className="flex flex-wrap mt-10">
                        <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                            <InputIcon
                                type="text"
                                color="red"
                                placeholder="Nombre"
                                iconName="person"
                            />
                            </div>
                        <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <InputIcon
                                type="text"
                                color="red"
                                placeholder="Teléfono"
                                iconName="phone"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                            <InputIcon
                                type="email"
                                color="red"
                                placeholder="Correo"
                                iconName="email"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <InputIcon
                                type="text"
                                color="red"
                                placeholder="Servicio"
                                iconName="settings"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-10 font-light border">
                        <Textarea color="red" placeholder="Descripción" />
                    </div>

                            {/* Boton  */}
                        <div className="flex justify-center mt-4">
                        <a
                            href="#"
                            className="mt-5"
                            onClick={(e) => e.preventDefault()}
                        >
                            <div className="flex justify-center mt-2">
                        <Button color="red" ripple="light " size="lg">
                            Enviar
                        </Button>
                    </div>
                        </a>
                    </div>

                    

                        </form>
                        </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
