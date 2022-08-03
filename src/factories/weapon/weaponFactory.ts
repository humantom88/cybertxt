import { IWeapon, WeaponModel, WeaponType } from "./types";

abstract class WeaponFactory {
    protected makeWeapon({
        weaponModel,
        weaponType,
        damageDice,
        damageDiceCount,
    }: IWeapon): IWeapon {
        return {
            weaponModel: weaponModel,
            weaponType: weaponType,
            damageDice: damageDice,
            damageDiceCount: damageDiceCount
        }
    }
}

export class PistolFactory extends WeaponFactory {
    public makePistol(weaponModel: WeaponModel) {
        return this.makeWeapon({
            weaponType: WeaponType.gun,
            weaponModel: weaponModel,
            damageDice: 6,
            damageDiceCount: 2,
        })
    }
}

// export class FightImplantFactory extends WeaponFactory {
//     public makeSliceAndDice(weaponType: WeaponModel) {
//         return this.makeWeapon(WeaponModel.sliceAndDice, 2, 12);
//     }
// }