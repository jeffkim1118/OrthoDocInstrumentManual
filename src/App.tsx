import { Routes, Route } from 'react-router-dom';
import Home from './components/Homepage/Home';
import Adjustment from './components/Adjust/Adjustment';
import AlignerBand from './components/AlignerBanding/AlignerBand';
import Deband from './components/Debanding/Deband';
import HawleyCheck from './components/Hawley/HawleyCheck';
import Navbar from './components/Nav/Navbar';
import './App.css';

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
        <Route path="/hawley" element={<HawleyCheck />}></Route>
      </Routes>
    </div>
  );
}

export default App;
