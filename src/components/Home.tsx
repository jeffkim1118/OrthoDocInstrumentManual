import { Link } from "react-router-dom";

export default function Home(){
    return (
        <div className="main-page">
            <h1>Welcome to Orthodontic Harmony!</h1>
            <h3>Explore instrument set ups for Orthodontist.</h3>
            
            <div className="table-content-container">
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

                </ol>
                
            </div>
            
        </div>
    )
}