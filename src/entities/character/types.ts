import { t } from 'i18next';
import { Armor } from "../../factories/armor/types";
import { IWeapon } from "../../factories/weapon/types";
import { Origin } from "../origin/origin";
import {
    MostValuedPerson,
    MostValuedProfessionYouOwn,
    Motivation,
    Personality,
    Relationship,
    OriginalFamilyBackground,
} from "./personality";
import { PersonalStyle } from "./personalStyle";

export enum Role {
    rockerboy,
    solo,
    netrunner,
    tech,
    medtech,
    media,
    exec,
    lawman,
    fixer,
    nomad,
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

export interface AttackResult {
    targetUid: string;
    attackDice: number;
    protectionDice: number;
    damageDice: number;
}

export interface CharacterProps {
    uid: string,
    name: string;
    characterClass: Role;
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
    mostValuedPerson: MostValuedPerson,
    mostValuedProfessionYouOwn: MostValuedProfessionYouOwn,
    // ----
    aims: string[];
    friends: (string | number)[];
    enemies: (string | number)[];
    habits: string[];
    specials: string[];
    armor: Armor;
    primaryWeapon: IWeapon;
    secondaryWeapon: IWeapon;
}

