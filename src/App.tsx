import { Routes, Route } from 'react-router-dom';
import { useState, useEffect} from 'react';
import Home from './components/Homepage/Home';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Homepage/Footer';
import './App.css';
import Page from './components/page';
import Login from './components/Account/Login';
import SignUp from './components/Account/SignUp';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function App() {
  const user = useSelector(selectUser);
  const[currentUser, setCurrentUser] = useState()  
  // const token = localStorage.getItem('token');
  // let base64Payload : any = token?.split('.')[1];
  // let payloadBuffer = Buffer.from(base64Payload, 'base64');
  // console.log(JSON.parse(payloadBuffer.toString()))

  useEffect(() => {
    if (!!localStorage.getItem('token')) {
      
    }
  }, [])
 
  return (
    <div className="App">
      <header>
        <Navbar />
        {user ? <h1>loggedin</h1> : <h2>not loggedin</h2>}
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
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
