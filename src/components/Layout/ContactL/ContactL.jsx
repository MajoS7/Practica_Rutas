import React from 'react'
import { Boton } from '../../UI/Boton/Boton'
import './ContactL.css'

export const ContactL = () => {
  return (
    <div className='containerContact'>
        <div className='title'>
        <h1 >Stay in touch</h1>
        </div>
        
        <div className='formulario'>
        <input className='text' type="text" placeholder='User'/>
            <input className='text' type="text"  placeholder='Company'/>
            <input className='text' type="email" placeholder='E-mail' />
            <input className='text' type="text"  placeholder='Phone'/>
            <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
            </div>
        <Boton mensaje='Send'/>
        
    </div>
  )
}
