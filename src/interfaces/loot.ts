import { Hex, Percentages } from '../types/loot';

export interface IWeaponGenerator {
    weaponId: Hex;
    grind: Hex;
    special: Hex;
    percentages: Percentages;
}

export interface IArmorGenerator {
    armorId: Hex;
    slots: Hex;
    def: Hex;
    evp: Hex
}

export interface IItemGenerator {
    itemId: Hex;
    amount: Hex;
}

export interface IUnitGenerator {
    unitId: Hex;
    suffix: Hex;
}

export interface ITechniqueGenerator {
    value: Hex;
    level: Hex;
}

export interface IAddMeseta {
    amount: number;
}

export interface IGenerateLoot {
    cmd: string;
    code: string[];
}
