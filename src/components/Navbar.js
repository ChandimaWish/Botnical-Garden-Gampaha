import React ,{useState} from 'react'
import '../styles/Navbar.css'

import logo from '../assests/logo.png';
import { Link } from 'react-router-dom';


function Navbar() {
  const[active,setActive] = useState('nav__menu');
  const[toggleIcon,setToggleIcon] = useState('nav__toggler');
  

  const navToggle = () => {
    active === 'nav__menu'

       ? setActive('nav__menu nav__active')
       : setActive("nav__menu");
      
    


    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");


    
  };

  return (
    <nav className='nav'>
      <a href="#" className='nav__logo'>GAMPAHA Botanical garden</a>
      {/* <img src={logo} className='nav__logo'/> */}
      
      <ul className={active}>
          <Link to="/"><li className='nav__item'><a href='#' className='nav__link'>HOME</a></li></Link>
          <Link to="/Herbarium">
          <li className='nav__item'><a href='#' className='nav__link'>Herbarium</a></li>
          </Link>
          <Link to="/Contacts"><li className='nav__item'><a href='#' className='nav__link'>Contacts</a></li></Link>
          <Link to="/News"><li className='nav__item'><a href='#' className='nav__link'>News</a></li></Link>
          <Link to="/Gallery"><li className='nav__item'><a href='#' className='nav__link'>Gallery</a></li></Link>
          <Link to="Services"><li className='nav__item'><a href='#' className='nav__link'>Services</a></li></Link>
          <Link to="Publication"><li className='nav__item'><a href='#' className='nav__link'>Publication</a></li></Link>
      </ul>
      <div onClick={navToggle}className={toggleIcon}>
        <div className='line1'></div>
        <div className='line1'></div>
        <div className='line1'></div>
        
      </div>
    </nav>
  );
}

export default Navbar
