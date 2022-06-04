import { Armor } from "../../factories/armor/types";
import { Weapon } from "../../factories/weapon/types";
import { Origin } from "../origin/origin";
import { Motivation, Personality, Relationship } from "./personality";
import { PersonalStyle } from "./personalStyle";

export enum CharacterClassName {
    rocker = 'rocker',
    fixer = 'fixer',
    journalist = 'journalist',
    cop = 'cop',
    solo = 'solo',
    nomad = 'nomad',
    netrunner = 'netrunner',
    tech = 'tech',
}

export interface Characteristics {
    intelligence: number;
    reflexes: number;
    agility: number;
    tech: number;
    cool: number;
    will: number;
    luck: number;
    movement: number;
    body: number;
    empathy: number;
}

export interface Injury {
    name: string;
    debuff: 0;
    characteristic: Characteristics;
}

export interface Ability {
    name: string;
    characteristic: keyof Characteristics; 
    bonus: number;
}

export interface CharacterProps {
    name: string;
    characterClass: CharacterClassName;
    characteristics: Characteristics;
    abilities: Set<Ability>;
    basicHealth: number;
    seriousInjuries: Injury[];
    savingThrow: number;
    // ---
    biography: string;
    motivation: Motivation;
    relationship: Relationship;
    origin: Origin;
    personality: Personality,
    personalStyle: PersonalStyle,
    // ----
    aims: string[];
    friends: (string | number)[];
    enemies: (string | number)[];
    habits: string[];
    specials: string[];
    armor: Armor;
    primaryWeapon: Weapon;
    secondaryWeapon: Weapon;

}

