"use strict";
exports.__esModule = true;
var questions_1 = require("./questions");
var user_1 = require("./user");
var inquirer_1 = require("inquirer");
var user_2 = require("./user");
var team_1 = require("./team");
exports.start = function () {
    inquirer_1.prompt(questions_1.startPrompt).then(function (answers) {
        var option = answers.start;
        if (option === 'Ingresar') {
            user_1.login();
        }
        else if (option === 'Registrarse') {
            inquirer_1.prompt(questions_1.registerUserPrompt).then(function (ans) {
                var user = ans;
                user_2.createUser(user);
            });
        }
        else {
            console.log('Usted ha salido del sistema');
        }
    });
};
exports.show = function () {
    inquirer_1.prompt(questions_1.teamActionsPrompt).then(function (answers) {
        var option = answers.show;
        switch (option) {
            case 'Registrar nuevo equipo':
                console.log('Registrar nuevo equipo');
                inquirer_1.prompt(questions_1.createTeamPrompt).then(function (ans) {
                    var team = new team_1.Team('', 0, []);
                    team.teamName = ans.teamName;
                    team.fundationYear = ans.fundationYear;
                    team.players = ans.players;
                    team_1.createTeam(team);
                });
                break;
            case 'Actualizar equipo':
                console.log('Actualizar equipo');
                break;
            case 'Eliminar equipo':
                console.log('Eliminar equipo');
                break;
            case 'Atrás':
                console.log('Atrás');
                break;
            case 'Salir':
                exports.start();
                break;
        }
    });
};
exports.start();
