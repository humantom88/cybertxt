import { PersonalStyle, PersonalStyleProps } from "../../entities/character/personalStyle";
import { getRandomInt } from "../../utils";
import { Affectation, ClothingStyle, HairStyle } from "./types";

export class PersonalStyleFactory {
    static randomPersonalStyle ({
        affectation,
        clothingStyle,
        hairStyle,
    }: Partial<PersonalStyleProps> = {}): PersonalStyle {
        return new PersonalStyle({
            affectation: affectation ?? this.getRandomAffectation(),
            clothingStyle: clothingStyle ?? this.getRandomClothingStyle(),
            hairStyle: hairStyle ?? this.getRandomHairStyle(),
        });
    }

    private static getRandomAffectation(): Affectation {
        const affectations = Object.values(Affectation);
        const affectationNumber = getRandomInt(affectations.length);
        return affectations[affectationNumber];
    }

    private static getRandomClothingStyle(): ClothingStyle {
        const clothingStyles = Object.values(ClothingStyle);
        const clothingStyleNumber = getRandomInt(clothingStyles.length);
        return clothingStyles[clothingStyleNumber];
    }

    private static getRandomHairStyle(): HairStyle {
        const hairStyles = Object.values(HairStyle);
        const hairStyleNumber = getRandomInt(hairStyles.length);
        return hairStyles[hairStyleNumber];
    }
}