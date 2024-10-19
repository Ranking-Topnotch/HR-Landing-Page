import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from "react-icons/io5";
import Image from '../../image/687pIkbEsTthg.png'
import './nav.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <img src={Image} alt='Shamzbridge Cousult' height={50} width={50} />
      
      {/* Hamburger icon / Close icon for mobile screens */}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <IoClose size={30} color="white" /> : <GiHamburgerMenu size={30} color="white" />}
      </div>

      {/* Navbar links that toggle visibility on smaller screens */}
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><a href="#about-us" onClick={toggleMenu}>About Us</a></li>
        <li><a href="#services" onClick={toggleMenu}>Services</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
