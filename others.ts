
import * as fs from 'fs';
import {User, UserInterface} from "./user";
import {Observable, Observer} from "rxjs";
import {TeamInterface} from "./team";

export const readFile = (fileName: string ): Promise<string> =>{
    return new Promise((resolve, reject)=>{
        fs.readFile(
            fileName,
            'utf-8',
            (error: NodeJS.ErrnoException, data : string)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(data);
                }
            }
        );
    });
};

export const writeFile = (fileName:string, content:string) :Promise<string> =>{
    return new Promise((resolve,reject)=>{
       fs.writeFile(fileName , content, (error: NodeJS.ErrnoException)=>{
          if(error){
              reject(error);
          }else{
              resolve('Guardado exitoso!!!');
          }
       });
    });
};

export const readFile$ = (fileName: string): Observable<UserInterface> =>{
  return Observable.create((observer: Observer<any>)=>{
     fs.readFile(fileName,'utf-8', (error: NodeJS.ErrnoException, data: string)=>{
            if(error){
                observer.error(error);
            }else{
                const users: UserInterface[] = JSON.parse(data);
                users.forEach(user=>{
                   observer.next(user)
                });
                observer.complete();
            }
         }
     )
  });
};

export const readTeamFile$ = (fileName: string): Observable<TeamInterface> =>{
    return Observable.create((observer: Observer<any>)=>{
        fs.readFile(fileName,'utf-8', (error: NodeJS.ErrnoException, data: string)=>{
                if(error){
                    observer.error(error);
                }else{
                    const teams: TeamInterface[] = JSON.parse(data);
                    teams.forEach(team=>{
                        observer.next(team)
                    });
                    observer.complete();
                }
            }
        )
    });
};