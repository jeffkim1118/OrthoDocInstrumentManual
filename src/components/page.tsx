import obj from "./Instruments";

function Page(){

    
    const information = obj[window.location.pathname];
    console.log(information)
    return(
        <div>
            <h1>{information.name}</h1>
            <img src={information.image}></img>
            <p></p>
        </div>
    )
}
export default Page;