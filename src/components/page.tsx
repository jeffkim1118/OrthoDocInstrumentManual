// import obj from "./Instruments";
import ModalP from "./ModalPopup/ModalP";

function Page({ instrumentObj }:any) {
  
  const { name, image, desc } = instrumentObj;

  return (
    <div id="kit-container">
      <div className="kit">
        <h1>{name}</h1>
        <div className="setup-picture-container">
          {image.map((x: any) => (
            <ModalP className="setup-picture" v={x} />
          ))}
        </div>

        <p>{desc}</p>
      </div>
    </div>
  );
}
export default Page;
