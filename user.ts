import {writeFile, readFile$,readFile} from "./others";
import {start} from "./app";
import {find} from "rxjs/operators";
import {passwordPromt} from "./questions";
import {prompt, Answers} from 'inquirer';

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
            console.log('Registrado correctamente!!!');
            start();
        })
        .catch(error =>{
            console.log('Ocurrió un error',error);
        })
};

export const validateUser= (userName: string) =>{
    const userFound$ = readFile$('userDB.json').pipe(
        find((value: UserInterface)=>value.username===userName)
    );

    userFound$.subscribe(
        (value:UserInterface | undefined)=>{
            if (value===undefined){
                console.log("Usuario no encontrado");
                start();
            }else {
                const user = new User(
                    value.username,
                    value.password
                );
                prompt(passwordPromt).then((answers: Answers)=>{
                    const password: string = answers.password;
                    if(user.getPassword()===password){
                        console.log('está dentro');
                    }else{
                        console.log('no se encuentra el usuario');
                    }
                });
            }
        },
        (error: NodeJS.ErrnoException)=>{
            console.log('Ocurrió un error ',error);
        }
    );

};