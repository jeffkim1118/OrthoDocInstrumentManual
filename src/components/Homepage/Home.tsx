import Content from "./Content"

export default function Home(){
    const handleClickScroll = () => {
        const element = document.getElementById('content');
        if(element){
            element.scrollIntoView({behavior:'smooth'})
        }
    }
    return (
        <div className="main-page">
            <div className="hero-background">
            <div className="hero-msg" >
                <h1 className="hero">Welcome to Orthodontic Harmony!</h1>
                <h4 className="hero">Explore instrument set ups for Orthodontist.</h4>
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
                <h2 id="content" style={{color:'whitesmoke',textAlign:'center', padding:'70px'}}><em>Here are our necessary kits</em></h2>
                <Content /> 
            </div>
        </div>
    )
}