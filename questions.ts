import {Answers, Separator} from 'inquirer';


export const startPrompt={
    type: 'list',
    name: 'start',
    message: 'Seleccione: ',
    choices: ['Ingresar', 'Registrarse', new Separator(), 'Salir']
};

export const teamActionsPrompt={
    type:'list',
    name: 'show',
    message: 'Ingrese una acción',
    choices: ['Registrar nuevo equipo', 'Actualizar equipo', 'Eliminar equipo',new Separator(), 'Atrás', new Separator(), 'Salir']
};

export const createTeamPrompt =[
    {
        type:'input',
        name: 'teamName',
        message: 'Ingrese el nombre del Equipo',
    },
    {
        type:'number-input',
        name: 'fundationYear',
        message: 'Ingrese el año de fundación del Equipo',
    },
    {
        type: 'input',
        name: 'players',
        message: "Ingrese los jugadores"
    }
];

export const playersPrompt=[
    {
        type: 'input',
        name: 'players',
        message: "Nombre del jugador"
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: '¿Quieres ingresar otro jugador?',
        default: true
    }
];



export const registerUserPrompt=[
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

export const usernamePrompt = {
    type: 'input',
    name: 'username',
    message: 'Ingrese el nombre de usuario: '
};

export const passwordPrompt = {
    type: 'password',
    name: 'password',
    message: 'Ingrese la contraseña: ',
    mask: '*'
};

export const deletePrompt={
    type:'input',
    name:'teamName',
    message:'Nombre del equipo que desea eliminar'
};