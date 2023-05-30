import React ,{useState} from 'react'
import '../styles/Navbar.css'


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
       <a href="chandimasanjeewa.com" className='nav__logo'>GAMPAHA Botanical garden</a>
      {/* <img src={logo} className='nav__logo'/> */}
      
      <ul className={active}>
      <li className='nav__item'><Link to="/">Home</Link></li>
          
          <li className='nav__item'><Link to="/Herbarium">Herbarium</Link></li>   
       
          <li className='nav__item'><Link to="/Contacts">Contacts</Link></li>
          <li className='nav__item'><Link to="/News">News</Link></li>
          <li className='nav__item'><Link to="/Gallery">Gallery</Link></li>
          <li className='nav__item'><Link to="/Services">Services</Link></li>
          <li className='nav__item'><Link to="/Publication">Publication</Link></li>
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
