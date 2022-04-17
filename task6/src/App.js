import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './Home/Home';


function App() {
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
