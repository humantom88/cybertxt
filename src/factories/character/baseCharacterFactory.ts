import { Character } from "../../entities/character/character";
import { CharacterProps } from "../../entities/character/types";
import { OriginFactory } from "../origin";
import { PersonalityFactory } from "../personality";
import { PersonalStyleFactory } from "../personalStyle";

export abstract class BaseCharacterFactory {
    protected make({
        name,
        characterClass,
        characteristics,
        abilities,
        basicHealth,
        seriousInjuries,
        savingThrow,
        biography,
        motivation,
        origin,
        personality,
        personalStyle,
        relationship,
        aims,
        friends,
        enemies,
        habits,
        specials,
        armor,
        primaryWeapon,
        secondaryWeapon,
    }: Partial<CharacterProps>): Character {
        return new Character({ 
            name,
            characterClass,
            characteristics,
            abilities,
            basicHealth,
            seriousInjuries,
            savingThrow,
            biography,
            motivation: motivation ?? PersonalityFactory.randomMotivation(),
            origin: origin ?? OriginFactory.randomOrigin(),
            personality: personality ?? PersonalityFactory.randomPersonality(),
            personalStyle: personalStyle ?? PersonalStyleFactory.randomPersonalStyle(),
            relationship: relationship ?? PersonalityFactory.randomRelationship(),
            aims,
            friends,
            enemies,
            habits,
            specials,
            armor,
            primaryWeapon,
            secondaryWeapon,
        });
    };
}