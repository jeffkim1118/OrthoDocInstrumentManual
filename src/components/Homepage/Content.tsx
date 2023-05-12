// import { Link } from "react-router-dom";
import Card from "./Card";
import setUps from "./Setups";

export default function Content() {
  return (
    <div  className="content">
      {setUps.map((setUp,indx) => {
        return <Card setUp={setUp} indx={indx} key={indx}/>
      })}
    </div>
  );
}
