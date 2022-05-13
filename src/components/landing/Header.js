import H2 from '@material-tailwind/react/Heading2';
import LeadText from '@material-tailwind/react/LeadText';

export default function Header() {
    return (
        <div className="carousel-inner relative w-full overflow-hidden">
            <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full" />
            <div className="container max-w-8xl relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <H2 color="white">Soluciones empresariales en Informatica y tecnología</H2>
                        <LeadText color="gray-200">
                                
                                
                            </LeadText>
                        <div className="text-gray-200">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
