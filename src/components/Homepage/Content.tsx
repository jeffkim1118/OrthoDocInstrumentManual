import { Link } from "react-router-dom";
import Card from "./Card";
import Adjustment from "../images/adjustment/adjustmentKit.jpg";
import AlignerBand from "../images/alignerBanding/button/IMG-4378.jpg";
import Debanding from "../images/deband/IMG-4372.jpg";
import Hawley from "../images/hawley/IMG-0444.jpg";

export default function Content() {
  const images = [Adjustment, AlignerBand, Debanding, Hawley, 'empty1', 'empty2', 'empty3', 'empty4', 'empty5'];

  return (
    <div>
      {/* <h2>Table of Contents:</h2>
      <ol className="content-list">
        <li>
          <Link id="table-content-link" to={"/adjustment"}>
            Adjustment Kit
          </Link>
        </li>
        <li>
          <Link id="table-content-link" to={"/alignerband"}>
            Aligner Banding Kit &#40;With Buttons / Without Buttons &#41;
          </Link>
        </li>
        <li>
          <Link id="table-content-link" to={"/deband"}>
            Debanding Kit
          </Link>
        </li>
        <li>
          <Link id="table-content-link" to={"/hawley"}>
            Hawley "Retainer" Check
          </Link>
        </li>
      </ol> */}

      {images.map((image,indx) => {
        return <Card image={image} indx={indx} key={indx}/>;
      })}
    </div>
  );
}
