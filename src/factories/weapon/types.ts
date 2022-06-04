export enum WeaponType {
    sliceAndDice = 'sliceAndDice',
    heavyPistol = 'heavyPistol',
}

export interface Weapon {
    weaponType: WeaponType;
    minDamage: number;
    maxDamage: number;
}
