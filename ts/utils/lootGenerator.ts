// To make an item, you need to use the /item command followed by 4 arguments, separated by commas.

// Ex. /item x,y,z,a

// ----------------------------------------------------------------------------

// To make weapons:

// /item VVVVVVGG,SS00PPPP,PPPPPPPP,0

// V = Weapon ID in HEX
// G = Grind in HEX
// S = Special on Weapon
// P = Percentages on Weapon in HEX (Don't go over 100%.)

const weaponGenerator = ({ weaponId, grind, special, percentages }) => {
    const command = '/item';
    const {
        native,
        aBeast,
        machine,
        dark,
        hit,
    } = percentages;
    const p1 = `${native}${aBeast}`; // "${SS00}${PPPP}",
    const p2 = `${machine}${dark}${hit}`; // "${PPPPPPPP}",
    const arguments = [
        `${weaponId}${grind}`,
        `${special}00${p1}`,
        `${p2}00`,
        '0'
    ];
    return `${command} ${arguments}`;
};

// ----------------------------------------------------------------------------

// For armors/shields:

// /item VVVVVV00,000SDDDD,00EEEE00,0

// V = Armor ID in HEX
// S = # of slots (00, 01, 02, 03, 04)
// D = Defense boost on armor in HEX. (Can't go over max.)
// E = Evasion boost on armor in HEX. (Can't go over max.)

// ----------------------------------------------------------------------------

// For items:

// /item VVVVVV00,00AA0000,0,0

// V = Item ID in HEX
// A = Amount of item desired in HEX.

const itemGenerator = ({ itemId, amount }) => {
    const command = '/item';
    const arguments = [
        `${itemId}00`, // VVVVVV00,
        `00${amount}0000`,
        '0',
        '0'
    ];
    return `${command} ${arguments}`;
};

// console.log(
// ` weapon -> ${weaponGenerator(spreadNeedle)}\n`,
// `item  -> ${itemGenerator(defaultItem)}\n`,
// );

// ----------------------------------------------------------------------------

// For units:

// /item VVVVVV00,000000SS,SS000000,0

// V = Unit ID in HEX
// S = Suffix in HEX. (0100 for +, 0300 for ++, FFFF for -, FEFF for --)

// ----------------------------------------------------------------------------

// For techniques:

// /item 0302LL00,VV000000,00000000

// V = Value of Technique
// L = Level of Technique in HEX

// ----------------------------------------------------------------------------

// For meseta:

// /addmeseta (amount in decimal)
