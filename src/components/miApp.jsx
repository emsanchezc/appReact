import React from "react";
import PropTypes from 'prop-types';

export const MiApp = ({titulo, descripcion}) => {

  return (
    <div>
      <h1>Hola Grupo</h1>
      <h2>{ titulo }</h2>
      <p>{ descripcion }</p>
    </div>
  );
}

MiApp.propTypes = {
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired
}

MiApp.defaultProps = {
    titulo: 'Titulo por defecto',
    descripcion: 'Descripción por defecto'
}