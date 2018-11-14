"use strict";
exports.__esModule = true;
var questions_1 = require("./questions");
var user_1 = require("./user");
var inquirer_1 = require("inquirer");
var user_2 = require("./user");
exports.start = function () {
    inquirer_1.prompt(questions_1.startPromp).then(function (answers) {
        var option = answers.start;
        if (option === 'Ingresar') {
            user_1.validateUser;
        }
        else if (option === 'Registrarse') {
            inquirer_1.prompt(questions_1.registerUserPromp).then(function (ans) {
                var user = ans;
                user_2.createUser(user);
            });
        }
        else {
            console.log('Usted ha salido del sistema');
        }
    });
};
exports.start();
