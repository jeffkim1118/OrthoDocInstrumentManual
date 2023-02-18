import Content from "./Content"

export default function Home(){
    return (
        <div className="main-page">
            <h1>Welcome to Orthodontic Harmony!</h1>
            <h3>Explore instrument set ups for Orthodontist.</h3>
            
            <div className="table-content-container">
                <Content />
            </div>
        </div>
    )
}