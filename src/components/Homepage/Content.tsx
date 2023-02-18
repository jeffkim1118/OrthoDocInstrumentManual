import { Link } from "react-router-dom";
export default function Content(){
    return (
        <div>
            <h2>Table of Contents:</h2>
                <ol>
                    <li>
                        <Link id="table-content-link" to={'/adjustment'}>Adjustment Kit</Link>
                    </li>
                    <li>
                        <Link id="table-content-link" to={'/alignerband'}>Aligner Banding Kit &#40;With Buttons / Without Buttons &#41;</Link>
                    </li>
                    <li>
                        <Link id="table-content-link" to={'/deband'}>Debanding Kit</Link>
                    </li>
                    <li>
                        <Link id="table-content-link" to={'/hawley'}>Hawley "Retainer" Check</Link>
                    </li>
                </ol>
        </div>
    )
}