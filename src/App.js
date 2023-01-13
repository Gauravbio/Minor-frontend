// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
// import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Search from './pages/Search';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Library from './pages/Library';
// import { RxDashboard } from 'react-icons/rx';


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/search' element={<Search />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/library' element={<Library />} />
      </Routes>
    </Router>
  );
}

export default App;
