import logo from './logo.svg';
import './App.css';
//import { Route, Routes } from 'react-router-dom';
import {  Route, Routes,  } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom';
import { Login } from './Components/Login';
import Newlogin from './Components/Newlogin';

function App() {
  return (
   
    <Routes>
      <Route path='/' element = {<Login/>}/>
      <Route path='/Newlogin' element = {<Newlogin/>}/>

    </Routes>
  );
}

export default App;
