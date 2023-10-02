
export default function Footer(){
    return( 
        <div className="footer">
            <h1 className="company-title">Orthodontic Harmony</h1>
            <a className="company-link" href="https://www.orthodonticharmony.com/" target="_blank" rel="noreferrer" style={{textDecoration:'none', color:'whitesmoke'}}>Website</a><br/>
            <a className="company-phone" href="tel:(914) 923-5089" style={{textDecoration:'none', color:'whitesmoke'}}> (914) 923-5089</a><br/>
            <a className="company-map" href="https://goo.gl/maps/wYrJmDbJmGzAPWTq8" target="_blank" rel="noreferrer" style={{textDecoration:'none', color:'whitesmoke'}}> 449 N State Rd #101, Briarcliff Manor, NY 10510</a>
        </div>
    )
}