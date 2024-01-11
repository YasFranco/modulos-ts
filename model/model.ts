//Importando el objeto entero.
// import fs from "node:fs"

// Para acceder a una propiedad del objeto uso el punto

import { readFileSync } from "node:fs";
import { ApiData, Character } from "../interfaces/interfaces";


const getAll = ():ApiData => {
    const PATH = "./database/data.json";
    return JSON.parse(readFileSync(PATH).toString())
}

const getCharacterById = (id: number):string => {
    const data = getAll()

    const character = data.results.find((character: Character ) => character.id === id);
    return character.name
}

console.log(getCharacterById(1))

export {getAll, getCharacterById};
