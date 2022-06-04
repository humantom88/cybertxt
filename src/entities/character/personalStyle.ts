import { Affectation, ClothingStyle, HairStyle } from "../../factories/personalStyle/types";

export interface PersonalStyleProps {
    affectation: Affectation,
    clothingStyle: ClothingStyle,
    hairStyle: HairStyle,
}

export class PersonalStyle {
    affectation: Affectation;
    clothingStyle: ClothingStyle;
    hairStyle: HairStyle;

    constructor({
        affectation,
        clothingStyle,
        hairStyle
    }: PersonalStyleProps) {
        this.affectation = affectation;
        this.clothingStyle = clothingStyle;
        this.hairStyle = hairStyle;
    }
}