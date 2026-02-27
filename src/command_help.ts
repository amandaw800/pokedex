import { State } from "./state.js";

export function commandHelp(state: State) {
    console.log("Welcome to the Pokedex!");
    console.log("Usage:");

    for(const [key, cmd] of Object.entries(state.commands)){
        console.log(`${cmd.name} : ${cmd.description}`)
    }

}