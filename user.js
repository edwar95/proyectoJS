"use strict";
exports.__esModule = true;
var others_1 = require("./others");
var app_1 = require("./app");
var operators_1 = require("rxjs/operators");
var questions_1 = require("./questions");
var inquirer_1 = require("inquirer");
var colors = require("colors");
var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    User.prototype.getUsername = function () {
        return this.username;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    return User;
}());
exports.User = User;
exports.createUser = function (user) {
    var fileName = 'userDB.json';
    others_1.readFile(fileName)
        .then(function (data) {
        var usersArray = JSON.parse(data);
        usersArray.push(user);
        var content = JSON.stringify(usersArray, null, '');
        return others_1.writeFile(fileName, content);
    })
        .then(function (message) {
        console.log(colors.bgYellow.black('Registrado correctamente'));
        app_1.start();
    })["catch"](function (error) {
        console.log('Ocurrió un error', error);
    });
};
exports.login = function () {
    inquirer_1.prompt(questions_1.usernamePrompt).then(function (answers) {
        var username = answers.username;
        others_1.readFile$('userDB.json')
            .pipe(operators_1.find(function (user) {
            return username === user.username;
        }), operators_1.filter(function (user) {
            if (user === undefined) {
                console.log(colors.bgRed.black(' Usuario no encontrado'));
                app_1.start();
                return false;
            }
            else {
                return true;
            }
        }))
            .subscribe(function (user) {
            inquirer_1.prompt(questions_1.passwordPrompt).then(function (answers_2) {
                var password = answers_2.password;
                if (password === user.password) {
                    app_1.show();
                }
                else {
                    console.log(colors.bgRed.black(' Contraseña incorrecta'));
                    app_1.start();
                }
            });
        });
    });
};
