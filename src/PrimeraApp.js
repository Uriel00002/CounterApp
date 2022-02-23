import React from 'react';

const PrimeraApp = ( {saludo = 'Hola Mundo'} ) => {

 
    return (
        <>
            <h1> {saludo} </h1>
            <p>Mi Primera Aplicacion</p>
        </>
    );

}

export default PrimeraApp;