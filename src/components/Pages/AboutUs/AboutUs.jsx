import React from 'react'
import { Footer } from '../../Layout/Footer/Footer'
import { Nav } from '../../Layout/Nav/Nav'
import { Imagen } from '../../UI/Imagen/Imagen'



export const AboutUs = () => {
  return (
    <div className='fondo'>
       <Nav/>
      <Imagen url="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg" descrip="Amanecer"/>
      <Footer/>
    </div>
  )
}

