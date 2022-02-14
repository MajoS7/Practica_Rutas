import React from 'react';
import { Footer } from '../../Layout/Footer/Footer';
import { Nav } from '../../Layout/Nav/Nav';
import { Imagen } from '../../UI/Imagen/Imagen';
import './Home.css'


export const Home = () => {
  return (
  <div className='fondo'>
      <Nav/>
      <Imagen url="https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_960_720.jpg" descrip="Rosa"/>
      <Footer/>
  </div>);
};
