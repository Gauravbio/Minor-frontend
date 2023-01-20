// import logo from './logo.svg';
// import './App.css';
import {Routes,Route} from 'react-router-dom'
// import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Search from './pages/Search';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Library from './pages/Library';
import { useEffect } from 'react';
import {loadUser} from './actions/user'
import { useAlert } from 'react-alert';

import { useJwt } from 'react-jwt';
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const navigate=useNavigate()
  const dispatch=useDispatch();
  const alert=useAlert();

  const {isAuthenticated,error,message}=useSelector((state)=> state.user)

  useEffect(()=> {
    dispatch(loadUser());
  },[dispatch])

  useEffect(()=> {
    if(error){
      alert.error(error)
      dispatch({type:"CLEAR_ERROR"})
    }
    if(message) {
      alert.success(message)
      dispatch({type:"CLEAR_MESSAGE"})
    }
  },[dispatch,error,message,alert])

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={isAuthenticated ? <Home />: <Login />} />
        <Route path='/about' element={isAuthenticated ? <About />: <Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/search' element={isAuthenticated ?<Search />: <Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={isAuthenticated ?<Dashboard />:<Login />} />
        <Route path='/library' element={isAuthenticated ?<Library />: <Login />} />
      </Routes>
    </>
  );
}

export default App;
