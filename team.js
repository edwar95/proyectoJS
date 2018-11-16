"use strict";
exports.__esModule = true;
var others_1 = require("./others");
var colors = require("colors");
var app_1 = require("./app");
var operators_1 = require("rxjs/operators");
exports.output = [];
var Team = /** @class */ (function () {
    function Team(teamName, fundationYear, players) {
        this._teamName = teamName;
        this._fundationYear = fundationYear;
        this._players = players;
    }
    Object.defineProperty(Team.prototype, "teamName", {
        get: function () {
            return this._teamName;
        },
        set: function (value) {
            this._teamName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "fundationYear", {
        get: function () {
            return this._fundationYear;
        },
        set: function (value) {
            this._fundationYear = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "players", {
        get: function () {
            return this._players;
        },
        set: function (value) {
            this._players = value;
        },
        enumerable: true,
        configurable: true
    });
    return Team;
}());
exports.Team = Team;
exports.createTeam = function (team) {
    var fileName = 'teamDB.json';
    others_1.readFile(fileName)
        .then(function (data) {
        var teamArray = JSON.parse(data);
        teamArray.push(team);
        var content = JSON.stringify(teamArray, null, '');
        return others_1.writeFile(fileName, content);
    })
        .then(function (message) {
        console.log(colors.bgYellow.black('Registrado correctamente'));
        others_1.readTeamFile$(fileName)
            .subscribe(function (team) {
            console.log('\n');
            console.log(team._teamName, team._fundationYear.toString(), team._players.toString());
        });
        app_1.show();
    })["catch"](function (error) {
        console.log('Ocurrió un error', error);
    });
};
exports.updateTeam = function (team) {
    others_1.readTeamFile$('teamDB.json')
        .pipe(operators_1.filter(function (data) {
        return data._teamName != team._teamName;
    }))
        .subscribe();
};
exports.deleteTeam = function (team) {
    var fileName = 'teamDB.json';
    others_1.readTeamFile$(fileName)
        .pipe(operators_1.find(function (data) {
        return data._teamName === team;
    }))
        .subscribe(function (team) {
        others_1.readFile(fileName)
            .then(function (data) {
            var teamArray = JSON.parse(data);
            teamArray.splice(teamArray.indexOf(team), 1);
            var content = JSON.stringify(teamArray, null, '');
            return others_1.writeFile(fileName, content);
        })
            .then(function (message) {
            console.log(colors.bgYellow.black('Equipo eliminado '));
            others_1.readTeamFile$(fileName)
                .subscribe(function (team) {
                console.log('\n');
                console.log(team._teamName, team._fundationYear.toString(), team._players.toString());
            });
            app_1.show();
        })["catch"](function (error) {
            console.log('Ocurrió un error', error);
        });
    });
};
