import { Armor, ArmorType } from "./types";

export class ArmorFactory {
    makeArmor(armorType: ArmorType): Armor {
        return {
            bodyProtection: 7,
            headProtection: 7,
            armorType,
        }
    }
}
