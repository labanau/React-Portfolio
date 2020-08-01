import React from 'react';
import logo from './logo.svg';
import About from '../src/components/About/About';
import Header from '../src/components/Header/Header';
import Navbar from '../src/components/Navbar/Navbar';
import Projects from '../src/components/Projects/Projects';
import Education from '../src/components/Education/Education';
import Contact from '../src/components/Contact/Contact';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" style={{paddingRight: "0px", paddingLeft: "0px", backgroundColor: "#212121"}}>
          <link href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" rel="stylesheet"/>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"/>
          <script src="https://kit.fontawesome.com/7adb618abf.js"></script>
          <Navbar></Navbar>
          <Header></Header>
          <About></About>
          <Projects></Projects>
          <Education></Education>
          <Contact></Contact>
          <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
          <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
    </div>
  );
}

export default App;
