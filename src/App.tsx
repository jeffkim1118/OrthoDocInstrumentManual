import { Routes, Route } from 'react-router-dom';
import {useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { selectUser,login, getUser } from './features/userSlice';
// import {fetchUser} from "./features/userSlice"
import Home from './components/Homepage/Home';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Homepage/Footer';
import './App.css';
import Page from './components/page';
import Login from './components/Account/Login';
import SignUp from './components/Account/SignUp';
import Profile from './components/Profile/Profile';
import Dashboard from './components/Profile/Dashboard';
import Update from './components/Profile/Update';
import PublicChat from './components/PublicChat';
import Recover from './components/Account/Recover';
import type { RootState, AppDispatch } from './app/Store';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch<AppDispatch>();
  
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
          dispatch(login(data))
      })
    
    // dispatch(getUser());
    }
    // debugger;
    // console.log(dispatch(fetchUser('hello')))
  },[])
  
  return (
    <div className="App">
      <header>  
        <Navbar />
      </header>
      <div>
        {localStorage.getItem('token') ?  <PublicChat /> : null}
      </div>
      <Routes>
        <Route path="/" index element={<Home />}></Route>
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
        <Route path='/recover' element={<Recover/>}></Route>
        {user ? <Route path='profile' element={<Profile/>}>
          <Route path='dashboard' element={<Dashboard/>}></Route>
          <Route path="update" element={<Update/>}></Route>
        </Route> : null} 
      </Routes>
      
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
