import Hawley from '../images/hawley/IMG-0444.jpg';
import ModalP from '../ModalPopup/ModalP';

export default function HawleyCheck(){
    return(
        <div id="kit-container">       
        <div id='kit'>
            <h1>Hawley Check</h1>
            <ModalP v={Hawley}/>
        </div>
        </div>
    )
}