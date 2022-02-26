import {gretornoArreglo, retornaArreglo} from '../../base/07-deses-arr'


describe('Pruebas en 05-Funciones.test.js', ()=> {

    test('debe retornar un string y un numero', () => {

        const [letras, numeros] = retornaArreglo();

        expect (letras).toBe ('ABC');
        expect (typeof letras).toBe ('string');
        
        expect (numeros).toBe ('ABC');
        expect (typeof numeros).toBe ('number');

    })

})