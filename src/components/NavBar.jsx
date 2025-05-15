import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div>OnTheRocks</div>
      <div>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/cocktail/:id'}>Cocktail Detail</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/newsLetter'}>News Letter</NavLink>
      </div>
    </nav>
  );
};




export default NavBar;
