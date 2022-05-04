import logo from './logo.svg';
import './App.css';
import {Button, SecondButton} from './Button/Button';
import { ClassComponent } from './ClassComponent/ClassComponent';
import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './Home/Home';
import { AsteroidCard } from './AsteroidCard/AsteroidCard';


function App() {
  let promise = new Promise(function(resolve, reject){
    setTimeout(()=>resolve("done"), 1000)
  })
  // Сначала синхронные, потом promise, потом setTimeout


  return (
    <div>
      <header>
        <Link to={'/'}>Home</Link>
        <Link to={'about'}>About</Link>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<label>123</label>} />
      </Routes>
    </div>
  );
}

export default App;
