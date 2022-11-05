import {t} from "i18next";
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import { Character } from "./entities/character/character";
import { CharacterFactory } from "./factories/character/characterFactory";
import { generateUUID } from "./utils";

const rl = readline.createInterface({ input, output });

export class App {
    private characterFactory: CharacterFactory;

    constructor() {
        this.characterFactory = new CharacterFactory();
    }

    run () {
        // const character = this.characterFactory.makeFixer({ name: 'Grease' });
        const game = new Game();
        game.run();
    }
}

class Party {
    characters: Character[];

    constructor(characters: Character[]) {
        this.characters = characters;
    }
}

interface GameStepInterface {
    id: string;
    name: string;
    parentStep?: GameStepInterface;
    childSteps?: GameStepInterface[];
    runStep: () => Promise<void>;
}

class GameConfig implements GameStepInterface {
    id: string;
    name: string;
    parentStep?: GameStepInterface;
    childSteps?: GameStepInterface[];
    runStep: () => Promise<void>;

    constructor({
        id,
        name,
        parentStep,
        childSteps,
        runStep,
    }: GameStepInterface) {
        this.id = id;
        this.name = name;
        this.parentStep = parentStep;
        this.childSteps = childSteps;
        this.runStep = runStep;
    }
};

class Game {
    private party: Party;
    private gameConfig: GameStepInterface;
    
    private prevStep: GameStepInterface;
    private currentStep: GameStepInterface;

    constructor(gameConfig?: GameStepInterface) {
        this.gameConfig = gameConfig ?? this.generateGameConfig();
    }

    generateGameConfig (): GameStepInterface {
        const newGameStep: GameStepInterface = {
            id: generateUUID(),
            name: 'NewGameStep',
            async runStep() {

            }
        };

        const loadGameStep: GameStepInterface = {
            id: generateUUID(),
            name: 'LoadGameStep',
            async runStep() {
                console.log(t('in.development'));
            }
        }

        const exitStep: GameStepInterface = {
            id: generateUUID(),
            name: 'ExitGameStep',
            async runStep() {
                console.log(t('in.development'));
            }
        }

        return new GameConfig({
            id: generateUUID(),
            name: 'WelcomeStep',
            childSteps: [newGameStep, loadGameStep, exitStep],
            async runStep () {
                console.log(`${t('game.menu.title')}\n\n`);
                ['1', '2', '3'].forEach(menuOption =>
                    console.log(`${menuOption}. ${t('game.menu.main.option.' + menuOption)}`)
                );

                const chosenStepString: string = await rl.question(t('game.menu.choose')) || '1';
                const chosenStepNumber: number = Number(chosenStepString);

                if (!chosenStepNumber) {
                    return;
                }

                const stepMap: Record<number, GameStepInterface> = {
                    1: newGameStep,
                    2: loadGameStep,
                    3: exitStep
                };

                const chosenStep = stepMap[chosenStepNumber];
                await chosenStep.runStep();
            }
        });
    }

    async run () {
        await this.gameConfig.runStep()
    }
}
