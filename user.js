"use strict";
exports.__esModule = true;
var others_1 = require("./others");
var app_1 = require("./app");
var operators_1 = require("rxjs/operators");
var questions_1 = require("./questions");
var inquirer_1 = require("inquirer");
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
        console.log('Registrado correctamente!!!');
        app_1.start();
    })["catch"](function (error) {
        console.log('Ocurrió un error', error);
    });
};
exports.validateUser = function (userName) {
    var userFound$ = others_1.readFile$('userDB.json').pipe(operators_1.find(function (value) { return value.username === userName; }));
    userFound$.subscribe(function (value) {
        if (value === undefined) {
            console.log("Usuario no encontrado");
            app_1.start();
        }
        else {
            var user_1 = new User(value.username, value.password);
            inquirer_1.prompt(questions_1.passwordPromt).then(function (answers) {
                var password = answers.password;
                if (user_1.getPassword() === password) {
                    console.log('está dentro');
                }
                else {
                    console.log('no se encuentra el usuario');
                }
            });
        }
    }, function (error) {
        console.log('Ocurrió un error ', error);
    });
};
