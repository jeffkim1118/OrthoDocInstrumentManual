import adjustmentKit from '../images/adjustment/adjustmentKit.jpg';


export default function Adjustment(){
    function handleShowPic(){
        console.log("here")
    }

    return (
        <div id='kit'>
            <h1>Adjustment Kit</h1>
            <img src={adjustmentKit} alt='adjustment kit' id='pic' onClick={handleShowPic}></img>
        </div>
    )
}