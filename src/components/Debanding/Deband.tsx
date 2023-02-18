import ModalP from '../ModalPopup/ModalP';
import deband1 from '../images/deband/IMG-4372.jpg';
import deband2 from '../images/deband/IMG-4373.jpg';

export default function Deband(){
    const debandingKits = [deband1, deband2]; 

    return(
        <div id='kit'>
            <h1>Debanding Kit</h1>
            {debandingKits.map((debandingKit, indx) => (
                <ModalP v={debandingKit} key={indx}/>
            ))}
        </div>
    )
}