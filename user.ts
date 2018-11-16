import {writeFile, readFile$,readFile} from "./others";
import {start,show} from "./app";
import {filter, find} from "rxjs/operators";
import {passwordPrompt,usernamePrompt} from "./questions";
import {Answers, prompt} from 'inquirer';
import {error} from "util";
import * as colors from 'colors'

export class User{
    private username : string;
    private password : string;

    constructor(username: string, password: string){
        this.username=username;
        this.password= password;
    }

    public getUsername(){
        return this.username;
    }

    public getPassword(){
        return this.password;
    }
}

export interface UserInterface {
    username: string;
    password: string;
}

export const createUser =(user : UserInterface)=>{
    const fileName = 'userDB.json';
    readFile(fileName)
        .then(data=>{
            const usersArray = JSON.parse(data);
            usersArray.push(user);
            const content = JSON.stringify(usersArray,null,'');
            return writeFile(fileName , content);
        })
        .then(message =>{
            console.log(colors.bgYellow.black('Registrado correctamente'));
            start();
        })
        .catch(error =>{
            console.log('Ocurrió un error',error);
        })
};

export const login = ()=>{
    prompt(usernamePrompt).then( (answers:  Answers)=>{
        const username = answers.username;
        readFile$('userDB.json')
            .pipe(
                find(user=>{
                    return username===user.username;
                }),
                filter(user=>{
                        if(user===undefined){
                            console.log(colors.bgRed.black(' Usuario no encontrado'));
                            start();
                            return false;
                        }else{
                            return true;
                        }
                    }
                )
            )
            .subscribe(
                (user) =>{
                    prompt(passwordPrompt).then((answers_2: Answers)=>{
                        const password = answers_2.password;
                        if(password===user.password){
                            show();
                        }else {
                            console.log(colors.bgRed.black(' Contraseña incorrecta'));
                            start();
                        }
                    });
                }
            )
    });
};