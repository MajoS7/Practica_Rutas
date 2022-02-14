import React from 'react';
import './Boton.css'

import PropTypes from 'prop-types';

export const Boton = ({mensaje}) => {
  return (
  <div>
      <button className='btn'>{mensaje}</button>
  </div>);
};

Boton.propTypes = {
    mensaje: PropTypes.string.isRequired
}


