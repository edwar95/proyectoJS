import {Separator} from 'inquirer';
export const startPromp={
    type: 'list',
    name: 'start',
    message: 'Seleccione: ',
    choices: ['Ingresar', 'Registrarse', new Separator(), 'Salir']
};

export const registerUserPromp=[
    {
        type: 'input',
        name: 'username',
        message: 'Ingrese el nombre de usuario: '
    },
    {
        type: 'password',
        name: 'password',
        message: 'Ingrese su contraseña: ',
        mask: '*'
    }
];

export const passwordPromt = {
    type: 'password',
    name: 'password',
    message: 'Ingrese la contraseña: ',
    mask: '*'
};