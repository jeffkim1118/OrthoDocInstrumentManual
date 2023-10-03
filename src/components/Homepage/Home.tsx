import Content from "./Content";
import { Link } from "react-scroll";

export default function Home() {
  
  return (
    <div className="main-page">
      <div className="hero-background">
        <div className="hero-msg">
          <h1 className="hero" title="heroMSG1">
            Welcome to Orthodontic Harmony!
          </h1>
          <h4 className="hero" title="heroMSG2">
            Explore instrument set ups for Orthodontist.
          </h4>
          <div className="arrow-container">
            <Link to="content" smooth={true} duration={100}>
              <div
                className="arrow"
                data-testid="arrow"
              
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="table-content-container">
        <h2 id="content" data-testid="content" className="table-content-title">
          <em>Here are our necessary kits</em>
        </h2>
        <Content />
      </div>
    </div>
  );
}
