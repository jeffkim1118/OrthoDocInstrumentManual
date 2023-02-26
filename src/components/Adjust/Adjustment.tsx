import adjustmentKit from '../images/adjustment/adjustmentKit.jpg';
import ModalP from '../ModalPopup/ModalP';

export default function Adjustment(){ 
    return (
        <div id='kit'>
            <h1>Adjustment Kit</h1>
            <ModalP v={adjustmentKit}/>
            <div>
                <h4>Preparation:</h4>
                <ul id="instrument-list">
                    <li >Hammer Head</li>
                    <li>Half Hammer Head</li>
                    <li>Mouth Mirror</li>
                    <li>Hook</li>
                    <li>Wire Cutter</li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}