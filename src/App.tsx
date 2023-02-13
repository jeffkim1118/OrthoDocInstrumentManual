import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Adjustment from './components/Adjustment';
import AlignerBand from './components/AlignerBand';
import Deband from './components/Deband';
import './App.css';
import Logo from './images/logo.png';

function App() {

  return (
    <div className="App">
      <header>
        <div className="nav-container">
          <img className="nav-logo" src={Logo} alt='logo'></img>
          <ul className='nav-bar'>
            <Link to='/' id='nav'>Home</Link>
            <Link to='/adjustment' id='nav'>Adjustment</Link>
            <Link to='/alignerband' id='nav'>Aligner Banding</Link>
            <Link to='/deband' id='nav'>Debanding</Link>
          </ul>
        </div>
      </header>
     
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/adjustment" element={<Adjustment />}></Route>
        <Route path="/alignerband" element={<AlignerBand />}></Route>
        <Route path="/deband" element={<Deband />}></Route>
      </Routes>
    </div>
  );
}

export default App;
