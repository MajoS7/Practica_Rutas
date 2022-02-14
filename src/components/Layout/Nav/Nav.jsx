import React from 'react';
import { NavLink } from 'react-router-dom';
import { Boton } from '../../UI/Boton/Boton';
import './Nav.css'


export const Nav = () => {
  return (
  <div className='btns'>
    <NavLink to='/'><Boton  mensaje="Home"/></NavLink>
    <NavLink to='/aboutUs'><Boton mensaje="About us"/></NavLink>
    <NavLink to='/contact'><Boton mensaje="Contact"/></NavLink>
  </div>);
};
