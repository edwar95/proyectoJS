"use strict";
exports.__esModule = true;
var fs = require("fs");
var rxjs_1 = require("rxjs");
exports.readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, 'utf-8', function (error, data) {
            if (error) {
                reject(error);
            }
            else {
                resolve(data);
            }
        });
    });
};
exports.writeFile = function (fileName, content) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(fileName, content, function (error) {
            if (error) {
                reject(error);
            }
            else {
                resolve('Guardado exitoso!!!');
            }
        });
    });
};
exports.readFile$ = function (fileName) {
    return rxjs_1.Observable.create(function (observer) {
        fs.readFile(fileName, 'utf-8', function (error, data) {
            if (error) {
                observer.error(error);
            }
            else {
                var users = JSON.parse(data);
                users.forEach(function (user) {
                    observer.next(user);
                });
                observer.complete();
            }
        });
    });
};
