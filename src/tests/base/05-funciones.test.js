import {getUser, getUsuarioActivo} from '../../base/05-funciones'

describe('Pruebas en 05-Funciones.test.js', ()=> {

    test('debe retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect (user).toEqual(userTest);


    })

    test('debe retornar un objeto', () => {

        const nombre = 'Uriel';
        const user = getUsuarioActivo(nombre);

        expect (user).toEqual({
            uid: 'ABC567',
            username: nombre
        });


    })

})