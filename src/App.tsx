import { Routes, Route } from 'react-router-dom';
import Home from './components/Homepage/Home';
import Adjustment from './components/Adjustment';
import AlignerBand from './components/AlignerBand';
import Deband from './components/Deband';
import './App.css';
import Navbar from './components/Nav/Navbar';

function App() {

  return (
    <div className="App">
      <header>
        <Navbar />
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
