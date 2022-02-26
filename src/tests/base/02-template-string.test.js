import { getSaludo } from "../../base/02-template-string";


describe ('Pruebas en 02-template-string.test.js',() => {
 
    test ('prueba en el metodo getSaludo', () => {

        const nombre = 'Uriel';

        const saludo = getSaludo( nombre );

        expect (saludo) .toBe('Hola' + nombre);

    })

    

})