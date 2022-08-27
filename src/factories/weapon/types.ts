export enum WeaponModel {
    sliceAndDice = 'sliceAndDice',
    heavyPistol = 'heavyPistol',
}

export enum WeaponType {
    melee,
    gun
}

export interface IWeapon {
    weaponModel: WeaponModel;
    weaponType: WeaponType;
    damageDice: number;
    damageDiceCount: number;
}
