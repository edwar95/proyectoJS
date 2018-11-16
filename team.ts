import {readFile, readFile$, readTeamFile$, writeFile} from "./others";
import * as colors from "colors";
import {show} from "./app";
import {Answers, prompt} from "inquirer";
import {playersPrompt} from "./questions";
import {find,filter} from "rxjs/operators";

export const output:string[]=[];
export class Team{
    get teamName(): string {
        return this._teamName;
    }

    set teamName(value: string) {
        this._teamName = value;
    }

    get fundationYear(): number {
        return this._fundationYear;
    }

    set fundationYear(value: number) {
        this._fundationYear = value;
    }

    get players(): string[] {
        return this._players;
    }

    set players(value: string[]) {
        this._players = value;
    }
    private _teamName : string;
    private _fundationYear: number;
    private _players : string [];

    constructor(teamName: string, fundationYear: number, players: string[]){
        this._teamName= teamName;
        this._fundationYear= fundationYear;
        this._players= players;
    }

}

export interface TeamInterface{
    _teamName: String;
    _fundationYear: number;
    _players: string[];
}

export const createTeam=(team:TeamInterface)=>{
    const fileName= 'teamDB.json';
    readFile(fileName)
        .then(data=>{
            const teamArray= JSON.parse(data);
            teamArray.push(team);
            const content= JSON.stringify(teamArray, null,'');
            return writeFile(fileName,content);
        })
        .then(message=>{
            console.log(colors.bgYellow.black('Registrado correctamente'));
            readTeamFile$(fileName)
                .subscribe(
                    (team)=>{
                        console.log('\n');
                        console.log(team._teamName,team._fundationYear.toString(),team._players.toString());
                    });
            show();
        })
        .catch(error =>{
            console.log('Ocurrió un error',error);
        })
};

export const updateTeam=(team:TeamInterface)=>{
    readTeamFile$('teamDB.json')
        .pipe(
            filter((data)=>{
               return data._teamName!=team._teamName;
            })
        )
        .subscribe(

        )
};

export const deleteTeam=(team:string)=>{
    const fileName='teamDB.json';
    readTeamFile$(fileName)
        .pipe(
            find(data=>{
                return data._teamName===team;
            })
        )
        .subscribe(
            (team)=>{
                readFile(fileName)
                    .then(data=>{
                        const teamArray= JSON.parse(data);
                        teamArray.push(team);
                        const content= JSON.stringify(teamArray, null,'');
                        return writeFile(fileName,content);
                    })
                    .then(message=>{
                        console.log(colors.bgYellow.black('Equipo eliminado '));
                        readTeamFile$(fileName)
                            .subscribe(
                                (team)=>{
                                    console.log('\n');
                                    console.log(team._teamName,team._fundationYear.toString(),team._players.toString());
                                });
                        show();
                    })
                    .catch(error =>{
                        console.log('Ocurrió un error',error);
                    })
            }
        )
};

