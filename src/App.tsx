import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Adjustment from './components/Adjustment';
import AlignerBand from './components/AlignerBand';
import Set3 from './components/Set3';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="nav-container">
        <ul className='nav-bar'>
          <Link to='/' id='nav'>Home</Link>
          <Link to='/adjustment' id='nav'>Adjustment</Link>
          <Link to='/alignerband' id='nav'>Aligner Banding</Link>
          <Link to='/set3' id='nav'>Set3</Link>
        </ul>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/adjustment" element={<Adjustment />}></Route>
        <Route path="/alignerband" element={<AlignerBand />}></Route>
        <Route path="/set3" element={<Set3 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
