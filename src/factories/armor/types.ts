export enum ArmorType {
    kevlar = 'kevlar'
}

export interface Armor {
    armorType: ArmorType,
    headProtection: number;
    bodyProtection: number;
}
