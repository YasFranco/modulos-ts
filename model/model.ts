//Importando el objeto entero.
// import fs from "node:fs"

// Para acceder a una propiedad del objeto uso el punto

import { readFileSync } from "node:fs";

const PATH = "./database/data.json";

interface ApiData {
    info: any,
    results: any
}

interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: any;
    location: any;
    image: string;
    episode: string[];
    url: string;
    created: string
}

const getAll = ():ApiData => JSON.parse(readFileSync(PATH).toString())

const getCharacterById = (id: number):string => {
    const data = getAll()

    const character = data.results.find((character: Character ) => character.id === id);
    return character.name
}

console.log(getCharacterById(1))

export {getAll, getCharacterById};
