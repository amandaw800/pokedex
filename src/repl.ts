
import { commandExit } from './command_exit.js';
import { commandHelp } from './command_help.js';
import { State } from "./state.js";



export function cleanInput(input: string): string[] {
    return input.toLowerCase().trim().split(/\s+/);
}



export function startREPL(state: State) {

    state.rl.prompt();

    

    state.rl.on('line', (input) => {

        const cleanedInput = cleanInput(input);

        const cmd = cleanedInput[0];

        if(cmd === ""){
            state.rl.prompt();
        } else if(cmd === "exit") {
            commandExit(state);
        } else if(cmd === "help") {
            commandHelp(state);
        } else {
            console.log("Unknown command");
        }

        state.rl.prompt();

    });
  

}