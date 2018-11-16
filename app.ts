import {startPrompt, registerUserPrompt, teamActionsPrompt, createTeamPrompt, deletePrompt} from "./questions";
import {UserInterface, login} from "./user";
import {prompt, Answers} from 'inquirer';
import {createUser} from "./user";
import {createTeam, askNewPlayer, output, Team, TeamInterface, deleteTeam} from "./team";

export const start = ()=>  {
    prompt(startPrompt).then((answers: Answers)=>{
        const option = answers.start;
        if(option==='Ingresar'){
            login();
        }else if(option==='Registrarse'){
            prompt(registerUserPrompt).then(ans=>{
                const user: UserInterface = <UserInterface>ans;
                createUser(user);
            })
        }else{
            console.log('Usted ha salido del sistema')
        }
    });
};

export const show =()=>{
    prompt(teamActionsPrompt).then((answers: Answers)=>{
        const option = answers.show;
        switch (option) {
            case 'Registrar nuevo equipo':

                console.log('Registrar nuevo equipo');
                prompt(createTeamPrompt).then((ans: Answers)=>{
                    const team: Team= new Team('',0,[]);
                    team.teamName= ans.teamName;
                    team.fundationYear= ans.fundationYear;
                    team.players= ans.players;
                    createTeam(team);
                });
                break;
            case 'Actualizar equipo':
                console.log('Actualizar equipo');
                break;
            case 'Eliminar equipo':
                prompt(deletePrompt).then((answers:Answers)=>{
                    const teamName= answers.teamName;
                    deleteTeam(teamName);
                });
                break;
            case 'Atrás':
                console.log('Atrás');
                break;
            case 'Salir':
                start();
                break;
        }
    });
};

start();