import React from 'react';
import './Imagen.css';
export const Imagen = ({url, descrip}) => {
  return (<div>
      <img className='image' src={url} alt={descrip} />
  </div>);
};
