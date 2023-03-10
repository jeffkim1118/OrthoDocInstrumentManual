import { Routes, Route } from 'react-router-dom';
import Home from './components/Homepage/Home';
import Adjustment from './components/Adjust/Adjustment';
import AlignerBand from './components/AlignerBanding/AlignerBand';
import Deband from './components/Debanding/Deband';
import HawleyCheck from './components/Hawley/HawleyCheck';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Homepage/Footer';
import './App.css';
import Page from './components/page';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
     
      <Routes>
        <Route path="/" index element={<Home />}></Route>
        {/* <Route path="/adjustment" element={<Adjustment />}></Route> */}
        <Route path="/adjustment" element={<Page />}></Route>
        <Route path="/alignerband" element={<Page />}></Route>
        <Route path="/deband" element={<Page />}></Route>
        <Route path="/hawley" element={<Page />}></Route>
      </Routes>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
