import { Character } from "../../entities/character/character";
import { aiming, athletics, concentration, dodge, education, fight, meleeWeapon, perception, persuasion, playingInstrument, streetExpert, understandingPeople } from "../../entities/character/abilities";
import { Role, Characteristics, CharacterProps } from "../../entities/character/types";
import { BaseCharacterFactory } from "./baseCharacterFactory";
import { rockerBoyStatPresets } from "./statPresets/rockerBoyStatPresets";
import { getRandomInt } from "../../utils";
import { ArmorFactory } from "../armor/armorFactory";
import { ArmorType } from "../armor/types";
import { PistolFactory } from "../weapon/weaponFactory";
import { WeaponModel } from "../weapon/types";
import { fixerStatPresets } from "./statPresets/fixerPresets";
import { soloStatPresets } from "./statPresets/soloStatPresets";
import { nomandStatPresets } from "./statPresets/nomadStatPresets";
import { techStatPresets } from "./statPresets/techStatPresets";
import { netRunnerPresets } from "./statPresets/netRunnerPresets";

export class CharacterFactory extends BaseCharacterFactory {
    private makeRandomCharacterByRole(
        name: string,
        role: Role,
        statPresets: Record<string, Characteristics>
    ): Character {
        return this.make({
            name,
            characterClass: role,
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
            characteristics: statPresets[getRandomInt(6)],
            // Armor
            armor: new ArmorFactory().makeArmor(ArmorType.kevlar),
            primaryWeapon: new PistolFactory().makePistol(WeaponModel.heavyPistol),
            secondaryWeapon: null,
            //implants: [],
            // inventory: [

            // ],
        })
    }

    public makeRocker({ name }: Pick<CharacterProps, 'name'>): Character {
        return this.makeRandomCharacterByRole(name, Role.rocker, rockerBoyStatPresets);
    }

    public makeFixer({ name }: Pick<CharacterProps, 'name'>): Character {
        return this.makeRandomCharacterByRole(name, Role.fixer, fixerStatPresets);
    }

    public makeSolo({ name }: Pick<CharacterProps, 'name'>): Character {
        return this.makeRandomCharacterByRole(name, Role.solo, soloStatPresets);
    }

    public makeNomad({ name }: Pick<CharacterProps, 'name'>): Character {
        return this.makeRandomCharacterByRole(name, Role.nomad, nomandStatPresets);
    }

    public makeTech({ name }: Pick<CharacterProps, 'name'>): Character {
        return this.makeRandomCharacterByRole(name, Role.tech, techStatPresets);
    }

    public makeNetRunner({ name }: Pick<CharacterProps, 'name'>): Character {
        return this.makeRandomCharacterByRole(name, Role.netrunner, netRunnerPresets);
    }
}
