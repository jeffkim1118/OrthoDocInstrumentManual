// import { Link } from "react-router-dom";
import Card from "./Card";
import setUps from "./Setups";

export default function Content() {
  return (
    <div id="content">
      <h2>Here are our necessary kits</h2>
      
      {setUps.map((setUp,indx) => {
        return <Card setUp={setUp} indx={indx} key={indx}/>
      })}
    </div>
  );
}
