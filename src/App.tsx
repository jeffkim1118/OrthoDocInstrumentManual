import { Routes, Route } from 'react-router-dom';
import {useEffect} from 'react';
import Home from './components/Homepage/Home';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Homepage/Footer';
import './App.css';
import Page from './components/page';
import Login from './components/Account/Login';
import SignUp from './components/Account/SignUp';
import { useSelector,useDispatch } from 'react-redux';
import { selectUser,login } from './features/userSlice';
import Profile from './components/Profile';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!!localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      let decoded:any = token?.split('.')[1];
      let decodedUser = JSON.parse(atob(decoded))
      fetch(`http://localhost:3000/api/users/${decodedUser['id']}`,{
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        }
      })
      .then(res => res.json())
      .then((data) => {
      dispatch(login({
          id: data.id,
          username: data.username,
          first_name: data.first_name,
          last_name: data.last_name,
          email:data.email,
          loggedIn:true
        })
      )
      })
    }
  }, [])
 
  return (
    <div className="App">
      <header>
        {user ?  <Navbar user={user}/>:<Navbar />}
        {/* <Navbar /> */}
        {user ? <h1 style={{color:'white'}}>loggedin</h1> : <h2 style={{color:'white'}}>not loggedin</h2>}
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
        <Route path='/signup' element={<SignUp />}></Route>
        {user ? <Route path='/profile' element={<Profile user={user}/>}></Route> : null}
        
      </Routes>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
