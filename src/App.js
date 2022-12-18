import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';

function App() {
    return (
        <BrowserRouter>
      <div className="App">
          <ul>
              <li><Link to='/' >Home</Link></li>
              <li><Link to='About' >About</Link></li>
              <li><Link to='/Contact' >Contact</Link></li>
          </ul>
            </div>
            <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/about' element={< About />}></Route>
                <Route exact path='/contact' element={< Contact />}></Route>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
