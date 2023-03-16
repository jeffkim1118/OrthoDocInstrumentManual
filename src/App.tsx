import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Homepage/Home';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Homepage/Footer';
import './App.css';
import Page from './components/page';
import Login from './components/Account/Login';
import SignUp from './components/Account/SignUp';


function App() {
  const [currentUser, setCurrentUser] = useState();
  
  useEffect(() =>{
    fetch(`http://localhost:3000/api/users`)
    .then((r) => {
      if(r.ok){
        r.json().then((user) => setCurrentUser(user))
      }
    })
  },[])


  return (
    <div className="App">
      <header>
        <Navbar currentUser = {currentUser} setCurrentUser={setCurrentUser}/>
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
        <Route path='/login' element={<Login setCurrentUser={setCurrentUser}/>}></Route>
        <Route path='/signup' element={<SignUp setCurrentUser={setCurrentUser}/>}></Route>
      </Routes>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
