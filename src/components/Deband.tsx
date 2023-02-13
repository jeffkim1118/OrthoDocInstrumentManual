import deband1 from '../images/deband/IMG-4372.jpg';
import deband2 from '../images/deband/IMG-4373.jpg';


export default function Deband(){
    return(
        <div id='kit'>
            <h1>This is set 3</h1>
            <img src={deband1} alt='deband kit' id='pic'></img>
            <img src={deband2} alt='deband kit' id='pic'></img>
        </div>
    )
}