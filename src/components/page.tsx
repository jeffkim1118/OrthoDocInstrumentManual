import obj from "./Instruments";
import ModalP from "./ModalPopup/ModalP";

function Page(){
    const information = obj[window.location.pathname];
    const {name, image, desc} = information
    console.log(image)

    return(
        <div id="kit-container">
            {/* <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="content">
                <h1>Sliding Diagonals Background Effect</h1>
            </div> */}

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