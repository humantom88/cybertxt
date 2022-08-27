import { Armor } from '../../factories/armor/types';
import { IWeapon, WeaponModel, WeaponType } from '../../factories/weapon/types';
import { Origin } from '../origin/origin';
import { MostValuedPerson, MostValuedProfessionYouOwn, Motivation, OriginalFamilyBackground, Personality, Relationship } from './personality';
import { PersonalStyle } from './personalStyle';
import {
    Ability,
    Role,
    Characteristics,
    CharacterProps,
    Injury,
    AttackResult
} from './types';

export class Character implements CharacterProps {
    uid: string;
    name: string;
    characterClass: Role;
    characteristics: Characteristics;
    abilities: Set<Ability>;
    basicHealth: number;
    seriousInjuries: Injury[];
    savingThrow: number;
    // ===
    biography: string;
    motivation: Motivation;
    origin: Origin;
    personality: Personality;
    personalStyle: PersonalStyle;
    relationship: Relationship;
    mostValuedPerson: MostValuedPerson;
    mostValuedProfessionYouOwn: MostValuedProfessionYouOwn;
    // ===
    aims: string[];
    friends: (string | number)[];
    enemies: (string | number)[];
    habits: string[];
    specials: string[];
    armor: Armor;
    primaryWeapon: IWeapon;
    secondaryWeapon: IWeapon;

    constructor({
        uid,
        name,
        characterClass,
        characteristics,
        abilities,
        basicHealth,
        seriousInjuries,
        savingThrow,
        biography,
        motivation,
        personality,
        personalStyle,
        relationship,
        mostValuedPerson,
        mostValuedProfessionYouOwn,
        origin,
        aims,
        friends,
        enemies,
        habits,
        specials,
        armor,
    }: CharacterProps) {
        this.uid = uid;
        this.name = name;
        this.characterClass = characterClass;
        this.characteristics = characteristics;
        this.abilities = abilities;
        this.basicHealth = basicHealth;
        this.seriousInjuries = seriousInjuries;
        this.savingThrow = savingThrow;
        this.biography = biography;
        this.motivation = motivation;
        this.personality = personality;
        this.personalStyle = personalStyle;
        this.relationship = relationship;
        this.mostValuedPerson = mostValuedPerson;
        this.mostValuedProfessionYouOwn = mostValuedProfessionYouOwn;
        this.origin = origin;
        this.aims = aims;
        this.friends = friends;
        this.enemies = enemies;
        this.habits = habits;
        this.specials = specials;
        this.armor = armor;

        this.attack = this.attack.bind(this);
    }

    attack(
        enemy: CharacterProps,
        weapon: IWeapon,
    ): AttackResult {
        return {
            targetUid: enemy.uid,
            attackDice: 12,
            damageDice: 6,
            protectionDice: 6,
        };
    }
}