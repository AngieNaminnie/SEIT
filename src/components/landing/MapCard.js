import H6 from '@material-tailwind/react/Heading6';
import Title from './Title';


export default function MapCard (){

    return(
    <section>
        <div >
        <Title heading="Visitanos"/>
        </div>
       
      <div className='flex justify-center items-center'>
      <iframe className=' w-[67.25rem] h-[39rem] rounded-3xl shadow-2xl'src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10705.452582874872!2d-103.38789881403865!3d20.52692583871359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ad150b2fc2bf%3A0xa5b86d59c8020e09!2sSEIT%20GDL!5e0!3m2!1ses!2smx!4v1653074193009!5m2!1ses!2smx"></iframe>
      </div> 
    </section>
        
    );
}