import {startPromp, registerUserPromp} from "./questions";
import {UserInterface, validateUser} from "./user";
import {prompt} from 'inquirer';
import {createUser} from "./user";

export const start = ()=>  {
    prompt(startPromp).then(answers=>{
        const option = answers.start;
        if(option==='Ingresar'){
            validateUser;
        }else if(option==='Registrarse'){
            prompt(registerUserPromp).then(ans=>{
                const user: UserInterface = <UserInterface>ans;
                createUser(user);
            })
        }else{
            console.log('Usted ha salido del sistema')
        }
    });
};



start();