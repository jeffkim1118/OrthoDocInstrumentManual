// import { Link } from "react-router-dom";
import Card from "./Card";
import setUps from "./Setups";

export default function Content() {
  return (
    <div id="content" className="content">
      <h2 style={{color:'whitesmoke',textAlign:'center', padding:'70px'}}><em>Here are our necessary kits</em></h2>
      
      {setUps.map((setUp,indx) => {
        return <Card setUp={setUp} indx={indx} key={indx}/>
      })}
    </div>
  );
}
