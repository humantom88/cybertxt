import * as i18next from 'i18next';

import {resources} from './locales';
import { CharacterFactory } from "./factories/character/characterFactory";
import { App } from './App';

i18next.init({
    lng: 'ru', // if you're using a language detector, do not define the lng option
    debug: true,
    resources,
});

const characterFactory = new CharacterFactory();

const character = characterFactory.makeFixer({ name: 'Grease' });

console.log(character);
console.log(i18next.t("character.role"));

const app = new App();
app.run();
