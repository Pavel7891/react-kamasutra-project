//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogues from './components/dialogues/Dialogues';
 

 
 


const App = () => {
 
  return ( 
  <div className="app-wrapper">
  <Header/>
    <Navbar/>
    <div className = "app-wrapper-content">
    <Dialogues/>
    </div>
    {/* <Profile/> */}
  </div>
  )
}

export default App;
