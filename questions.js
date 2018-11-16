"use strict";
exports.__esModule = true;
var inquirer_1 = require("inquirer");
exports.startPrompt = {
    type: 'list',
    name: 'start',
    message: 'Seleccione: ',
    choices: ['Ingresar', 'Registrarse', new inquirer_1.Separator(), 'Salir']
};
exports.teamActionsPrompt = {
    type: 'list',
    name: 'show',
    message: 'Ingrese una acción',
    choices: ['Registrar nuevo equipo', 'Actualizar equipo', 'Eliminar equipo', new inquirer_1.Separator(), 'Atrás', new inquirer_1.Separator(), 'Salir']
};
exports.createTeamPrompt = [
    {
        type: 'input',
        name: 'teamName',
        message: 'Ingrese el nombre del Equipo'
    },
    {
        type: 'number-input',
        name: 'fundationYear',
        message: 'Ingrese el año de fundación del Equipo'
    },
    {
        type: 'input',
        name: 'players',
        message: "Ingrese los jugadores"
    }
];
exports.playersPrompt = [
    {
        type: 'input',
        name: 'players',
        message: "Nombre del jugador"
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: '¿Quieres ingresar otro jugador?',
        "default": true
    }
];
exports.registerUserPrompt = [
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
exports.usernamePrompt = {
    type: 'input',
    name: 'username',
    message: 'Ingrese el nombre de usuario: '
};
exports.passwordPrompt = {
    type: 'password',
    name: 'password',
    message: 'Ingrese la contraseña: ',
    mask: '*'
};
exports.deletePrompt = {
    type: 'input',
    name: 'teamName',
    message: 'Nombre del equipo que desea eliminar'
};
