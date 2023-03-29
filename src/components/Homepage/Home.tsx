import Content from "./Content"
import landingPage from "../images/landingPage.jpg";

export default function Home(){
    const handleClickScroll = () => {
        const element = document.getElementById('content');
        if(element){
            element.scrollIntoView({behavior:'smooth'})
        }
    }
    return (
        <div className="main-page">
            <div className="hero-background" style={{backgroundImage: `url(https://images.pexels.com/photos/16092760/pexels-photo-16092760.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load)`,
                minHeight: '500px',
                backgroundPosition: 'center',
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                backgroundColor: 'grey',
                backgroundBlendMode: 'multiply',
                backgroundAttachment: 'fixed'
            }}>
            <div className="hero-msg" >
                <h1 id="hero" style={{fontSize:'90px'}}>Welcome to Orthodontic Harmony!</h1>
                <h4 id="hero" style={{fontSize:'50px'}}>Explore instrument set ups for Orthodontist.</h4>

                <div className="arrow-container">
                    <div className="arrow" onClick={handleClickScroll}>
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