import { CharacterFactory } from "./factories/character/characterFactory";

const characterFactory = new CharacterFactory();

const character = characterFactory.makeRocker({ name: 'Forty' })

console.log(character)