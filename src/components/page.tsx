import obj from "./Instruments";
import ModalP from "./ModalPopup/ModalP";

function Page(){
    const information = obj[window.location.pathname];
    const {name, image, desc} = information
    console.log(information)
    console.log(obj['/startrecord'])
    return(
        <div id="kit-container">
            <div className="d-flex flex-column justify-content-center w-100 h-100"></div>
            <div id="kit">
                <h1>{name}</h1>
                <div className="test">
                    {image.map((x:any) => (<ModalP v={x}/>))}
                </div>
                <p>{desc}</p>
            </div>
        </div>
    )
}
export default Page;