import { Routes, Route } from 'react-router-dom';
import Home from './components/Homepage/Home';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Homepage/Footer';
import './App.css';
import Page from './components/page';
import Login from './components/Account/Login';
import SignUp from './components/Account/SignUp';

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
        <Route path='/aligneripr' element={<Page />}></Route>
        <Route path='/appliancecheck' element={<Page />}></Route>
        <Route path='/mse' element={<Page />}></Route>
        <Route path='/scan' element={<Page />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
