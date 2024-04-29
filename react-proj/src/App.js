import React from "react";
import './App.css';

import Home from './components/pages/Home';
import Shop from "./components/pages/Shop";
import About from "./components/pages/About";
import Contactus from "./components/pages/Contact";
import Navbar from "./components/inc/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/inc/Footer";
import Login from "./components/pages/Login";
import Signup from './components/pages/Signup';
import Axios from "axios";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Shop" element={<Shop />} /> {/* Corrected route path */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
