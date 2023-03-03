import Content from "./Content"
import landingPage from "../images/landingPage.jpg";

export default function Home(){
    return (
        <div className="main-page">


            <div className="hero-background" style={{background: `url(${landingPage})`,
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                backgroundColor: 'grey',
                backgroundBlendMode: 'multiply'
            }}>
            <div className="hero-msg" >
                <h1 id="hero" style={{fontSize:'90px'}}>Welcome to Orthodontic Harmony!</h1>
                <h4 id="hero" style={{fontSize:'50px'}}>Explore instrument set ups for Orthodontist.</h4>

                <div className="arrow-container">
                    <div className="arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            </div>

            <div className="table-content-container">
                <Content />
            </div>

            
        </div>
    )
}