import { Armor } from '../../factories/armor/types';
import { Weapon } from '../../factories/weapon/types';
import { Origin } from '../origin/origin';
import { Motivation, Personality, Relationship } from './personality';
import { PersonalStyle } from './personalStyle';
import {
    Ability,
    CharacterClassName,
    Characteristics,
    CharacterProps,
    Injury
} from './types';

export class Character implements CharacterProps {
    name: string;
    characterClass: CharacterClassName;
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
    // ===
    aims: string[];
    friends: (string | number)[];
    enemies: (string | number)[];
    habits: string[];
    specials: string[];
    armor: Armor;
    primaryWeapon: Weapon;
    secondaryWeapon: Weapon;

    constructor({ 
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
        origin,
        aims,
        friends,
        enemies,
        habits,
        specials,
        armor,
    }: CharacterProps) {
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
        this.origin = origin;
        this.aims = aims;
        this.friends = friends;
        this.enemies = enemies;
        this.habits = habits;
        this.specials = specials;
        this.armor = armor;
    }
}