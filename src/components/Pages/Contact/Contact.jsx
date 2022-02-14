import React from 'react'
import { ContactL } from '../../Layout/ContactL/ContactL'
import { Footer } from '../../Layout/Footer/Footer'
import { Nav } from '../../Layout/Nav/Nav'



export const Contact = () => {
  return (
    <div className='fondo'>
        <Nav/>
        <ContactL/>
        <Footer/>
    </div>
  )
}
