import React from 'react'
import { Boton } from '../../UI/Boton/Boton'


export const Footer = () => {
  return (
    <div className='btns'>
        <Boton mensaje="Github"/>
        <Boton mensaje="Gmail"/>
        <Boton mensaje="Slack"/>
    </div>
  )
}
