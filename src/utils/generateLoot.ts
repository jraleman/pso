import { 
    IWeaponGenerator,
    IArmorGenerator,
    IItemGenerator,
    IUnitGenerator,
    ITechniqueGenerator,
    IAddMeseta,
    IGenerateLoot,
 } from '../interfaces/loot';

const generateLoot = ({ cmd, code }: IGenerateLoot): string | null => {
    const cmdList = ['/items', 'addMeseta'];
    const isValid = !cmdList.includes(cmd) && code.length !== 4;
    return isValid ? `${cmd} ${code}` : null;
}

// To make weapons:
// /item VVVVVVGG,SS00PPPP,PPPPPPPP,0
// V = Weapon ID in HEX
// G = Grind in HEX
// S = Special on Weapon
// P = Percentages on Weapon in HEX (Don't go over 100%.)
export const weaponGenerator = ({ weaponId, grind, special, percentages }: IWeaponGenerator) => {
    const cmd = '/item';
    const {
        native,
        aBeast,
        machine,
        dark,
        hit,
    } = percentages;
    const p1 = `${native}${aBeast}`; // "${SS00}${PPPP}",
    const p2 = `${machine}${dark}${hit}`; // "${PPPPPPPP}",
    const code = [
        `${weaponId}${grind}`,
        `${special}00${p1}`,
        `${p2}00`,
        '0'
    ];
    return generateLoot({ cmd, code });
};

// For armors/shields:
// /item VVVVVV00,000SDDDD,00EEEE00,0
// V = Armor ID in HEX
// S = # of slots (00, 01, 02, 03, 04)
// D = Defense boost on armor in HEX. (Can't go over max.)
// E = Evasion boost on armor in HEX. (Can't go over max.)
export const armorGenerator = ({ armorId, slots, def, evp: evasion }: IArmorGenerator) => {
    const cmd = '/item';
    const code = [
        `${armorId}00`,
        `000${slots}${def}`,
        `00${evasion}`,
        '0'
    ];
    return generateLoot({ cmd, code });
};

// For items:
// /item VVVVVV00,00AA0000,0,0
// V = Item ID in HEX
// A = Amount of item desired in HEX.
export const itemGenerator = ({ itemId, amount }: IItemGenerator) => {
    const cmd = '/item';
    const code = [
        `${itemId}00`, // VVVVVV00,
        `00${amount}0000`,
        '0',
        '0'
    ];
    return generateLoot({ cmd, code });
};

// For units:
// /item VVVVVV00,000000SS,SS000000,0
// V = Unit ID in HEX
// S = Suffix in HEX. (0100 for +, 0300 for ++, FFFF for -, FEFF for --)
export const unitGenerator = ({ unitId, suffix }: IUnitGenerator) => {
    const cmd = '/item';
    const s1 = `${suffix}`.substr(0, 1);
    const s2 = `${suffix}`.substr(2, 3);
    const code = [
        `${unitId}00`,
        `000000${s1}`,
        `${s2}000000`,
        '0'
    ];
    return generateLoot({ cmd, code });
};

// For techniques:
// /item 0302LL00,VV000000,00000000
// V = Value of Technique
// L = Level of Technique in HEX
export const techniqueGenerator = ({ value, level }: ITechniqueGenerator) => {
    const cmd = '/item';
    const code = [
        `0302${level}00`,
        `${value}000000`,
        '00000000'
    ];
    return generateLoot({ cmd, code });
};

// For meseta:
// /addmeseta (amount in decimal)
export const addMeseta = ({ mesetas = 0 }: IAddMeseta) => `/addmeseta ${mesetas}`;

export default generateLoot;
