import { Weapon, WeaponType } from "./types";

abstract class WeaponFactory {
    protected makeWeapon(weaponType: WeaponType, minDamage: number, maxDamage: number): Weapon {
        return {
            weaponType,
            minDamage,
            maxDamage,
        }
    }
}

export class PistolFactory extends WeaponFactory {
    public makePistol(weaponType: WeaponType) {
        return this.makeWeapon(weaponType, 4, 24)
    }
}

export class FightImplantFactory extends WeaponFactory {
    public makeSliceAndDice(weaponType: WeaponType) {
        return this.makeWeapon(WeaponType.sliceAndDice, 2, 12);
    }
}