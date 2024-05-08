import React from 'react';
import { NavLink } from 'react-router-dom';


 
const Navbar = () => {
 
    return (
        <nav>
        <NavLink to="/">
          BLOG<span>TRAVELS</span>
        </NavLink>
 
        <ul>
          <li>
            <NavLink to="/" className={({isActive}) =>
          (isActive? StyleSheet.active: "")}>Home</NavLink>          
          </li>
          <li>
            <NavLink to="/about">Sobre</NavLink>          
          </li>
        </ul>
 
      </nav>
    )
}
 
export default Navbar;