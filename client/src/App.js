import './App.css';
import { Route, Routes } from 'react-router-dom';
//import {  Route, Routes,  } from 'react-router-dom';
//import { Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import Newlogin from './Components/Newlogin';
import { Login } from './Components/Login';

function App() {
  return (
   
    // <Login/>
    // <Newlogin/>
    <Routes>
      <Route path='/' element = {<Login/>}/>
      <Route path='/Newlogin' element = {<Newlogin/>}/>
      <Route path='/Home' element = {<Home/>} />
    </Routes>
  );
}

export default App;
