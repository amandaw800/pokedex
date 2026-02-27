
import { createInterface } from 'node:readline';
import { commandExit } from './command_exit.js';
import { commandHelp } from './command_help.js';



export function cleanInput(input: string): string[] {
    return input.toLowerCase().trim().split(/\s+/);
}



export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });

    rl.prompt();

    

    rl.on('line', (input) => {

        const cleanedInput = cleanInput(input);

        const cmd = cleanedInput[0];

        if(cmd === ""){
            rl.prompt();
        } else if(cmd === "exit") {
            commandExit();
        } else if(cmd === "help") {
            commandHelp();
        } else {
            console.log("Unknown command");
        }

        rl.prompt();

    });
  

}