import React from 'react';
import './nav.css';
import Image1 from '../../image/687pIkbEsTthg.png'


function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={Image1} alt='Shamzbridge Consult' height={50} width={50}/> 
      <ul className="nav-links">
        <li><a href="#about-us">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
