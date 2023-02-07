import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Set1 from './components/Set1';
import Set2 from './components/Set2';
import Set3 from './components/Set3';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <Link to='/' id='nav'>Home</Link>
        <Link to='/set1' id='nav'>Set1</Link>
        <Link to='/set2' id='nav'>Set2</Link>
        <Link to='/set3' id='nav'>Set3</Link>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/set1" element={<Set1 />}></Route>
        <Route path="/set2" element={<Set2 />}></Route>
        <Route path="/set3" element={<Set3 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
