"use strict";
exports.__esModule = true;
var inquirer_1 = require("inquirer");
exports.startPromp = {
    type: 'list',
    name: 'start',
    message: 'Seleccione: ',
    choices: ['Ingresar', 'Registrarse', new inquirer_1.Separator(), 'Salir']
};
exports.registerUserPromp = [
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
exports.passwordPromt = {
    type: 'password',
    name: 'password',
    message: 'Ingrese la contraseña: ',
    mask: '*'
};
