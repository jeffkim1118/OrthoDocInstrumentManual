import Content from "./Content"
import Footer from "./Footer";
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
            <div className="hero-background" style={{background: `url(${landingPage})`,
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
            <Footer/>
        </div>
    )
}