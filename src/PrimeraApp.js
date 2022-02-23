import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( {saludo } ) => {

 
    return (
        <>
            <h1> {saludo, subtitulo} </h1>
            <p>Mi Primera Aplicacion</p>
        </>
    );

}

PrimeraApp.propTypes = {

    saludo:PropTypes.string.isRequired

};

PrimeraApp.defaultProps = {
    subtitulo: "Soy un subtitulo"
}

export default PrimeraApp;