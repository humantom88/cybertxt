import { Character } from "../../entities/character/character";
import { aiming, athletics, concentration, dodge, education, fight, meleeWeapon, perception, persuasion, playingInstrument, streetExpert, understandingPeople } from "../../entities/character/abilities";
import { CharacterClassName, CharacterProps } from "../../entities/character/types";
import { BaseCharacterFactory } from "./baseCharacterFactory";
import { rockerInitialCharacteristics } from "./initial-characteristics";
import { getRandomInt } from "../../utils";
import { ArmorFactory } from "../armor/armorFactory";
import { ArmorType } from "../armor/types";
import { FightImplantFactory, PistolFactory } from "../weapon/weaponFactory";
import { WeaponType } from "../weapon/types";

const rockerClassShortDescription = `Если вы любите рок, это то что вам нужно. Рокеры - уличные поэты,\
голоса общественного сознания и бунтари Красной эпохи.`;
const rockerClassDescription = `С появлением портативных цифровых студий и освоением гэридж музыки \
каждый Рокер с идеей может высказать ее на улице, продать в музыкальных магазинах или передать по спутникам. \
Иногда ваша идея будет вовсе не тем, что корпорации или правительство хотят услышать. \
Иногда то, что вы говорите, будет плевком в лицо влиятельным людям, которые действительно жаждут управлять \
этим миром. Но вам все равно, потому что вы Рокер, вы знаете — это ваше место, чтобы бросить вызов \
авторитетам: будь то откровенные песни прот еста, которые донесут до масс правду, \
офигенные ритмы рок-н-ролла, вытаскив ающие людей от телеков на улицы, разжигающие \
толпы речи или пламенные произведения, которые формируют умы и сердца миллионов. \
Как у рокера у тебя гордая история: Боб Ди́лан, Брюс Сприн Остин, the Who, Элвис, \
the Stones — легионы хард-роковых героев, которые говорили правду кричащими гитарами или нежной лирикой. \
У тебя есть сила вести за собой людей; направлять, вдохновлять, информировать. Твоё послание может дать робким \
смелость, слабым — силу и слепым — зрение Легенды рокеров, такие как Джонни Сильверхэнд и Керри Евродайн, \
возглавляли армии против корпораций и правительств. Рокеры разоблачали коррупцию и свергали диктаторов. \
Это большая власть для того, кто каждый вечер дает концерты в разных городах. Но ты можешь справиться с этим. \
В конце концов: ты пришел играть!`

export class CharacterFactory extends BaseCharacterFactory {

    public makeRocker({ name }: Pick<CharacterProps, 'name'>): Character {
        return this.make({
            name,
            characterClass: CharacterClassName.rocker,
            abilities: new Set([
                athletics,
                fight,
                concentration,
                education,
                dodge,
                understandingPeople,
                streetExpert,
                aiming,
                meleeWeapon,
                perception,
                persuasion,
                playingInstrument,
            ]),
            basicHealth: 10, // CHECK ME
            //
            aims: [],
            enemies: [
                'Solid Snake',
                'Liquid Snake'
            ],
            seriousInjuries: [],
            specials: [],
            biography: '',
            characteristics: rockerInitialCharacteristics[getRandomInt(6)],
            // Armor
            armor: new ArmorFactory().makeArmor(ArmorType.kevlar),
            primaryWeapon: new PistolFactory().makePistol(WeaponType.heavyPistol),
            secondaryWeapon: new FightImplantFactory().makeSliceAndDice(WeaponType.sliceAndDice),
            //implants: [],
            // inventory: [

            // ],
        })
    }
}
