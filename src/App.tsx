import { Routes, Route } from 'react-router-dom';
import {useEffect,useState} from 'react';
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
import Update from './components/Profile/Update';
import PublicChat from './components/PublicChat';
import Recover from './components/Account/Recover';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);
  
  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  
  useEffect(() => {
    if(!!localStorage.getItem('token')){
      dispatch(getUser()).then((action:any) => {
        dispatch(login(action.payload))
      })
    }
  }, [dispatch])

  
  
  return (
    <div className="App">
      <header>  
        <Navbar />
      </header>
      <div>
        {localStorage.getItem('token') ?  <PublicChat /> : null}
        <button className={`scroll-to-top ${isVisible ? 'display' : 'notdisplay'}`} onClick={scrollToTop}></button>
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
        <Route path='/startrecord' element={<Page />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/recover' element={<Recover/>}></Route>
        {user ? <Route path='profile' element={<Profile/>}>
          {/* <Route path='dashboard' element={<Dashboard/>}></Route> */}
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
