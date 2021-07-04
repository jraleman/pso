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

const tjs = {
    weaponId: '003200',
    grind: '00', // check boundary of weapons
    special: '00',
    percentages: {
        native: '00',
        aBeast: '00',
        machine: '00',
        dark: '00',
        hit: '00',
    },
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

// const itemId = '000000'; // null 
const itemId = '030E28'; // Heart of Daisy Chain 
// const itemId = '030E2A'; // Heart of Rianov 303SNR
// const itemId = '030E2C'; // Heart of Rabbit Wand

const defaultItem = {
    itemId,
    amount: '00',
};

// console.log(
//     weaponGenerator(tjs),'\n',
//     itemGenerator(defaultItem),'\n',
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

// ----------------------------------------------------------------------------

// Technique values

// 00: Foie
// 01: Gifoie
// 02: Rafoie
// 03: Barta
// 04: Gibarta
// 05: Rabarta
// 06: Zonde
// 07: Gizonde
// 08: Razonde
// 09: Grants
// 0A: Deband
// 0B: Jellen
// 0C: Zalure
// 0D: Shifta
// 0E: Ryuker
// 0F: Resta
// 10: Anti
// 11: Reverser
// 12: Megid

// Complete Item List

// 010200 Barrier
// 010201 Shield
// 010202 Core Shield
// 010203 Giga Shield
// 010204 Soul Barrier
// 010205 Hard Shield
// 010206 Brave Barrier
// 010207 Solid Shield
// 010208 Flame Barrier
// 010209 Plasma Barrier
// 01020A Freeze Barrier
// 01020B Psychic Barrier
// 01020C General Shield
// 01020D Protect Barrier
// 01020E Glorious Shield
// 01020F Imperial Barrier
// 010210 Guardian Shield
// 010211 Divinity Barrier
// 010212 Ultimate Shield
// 010213 Spiritual Shield
// 010214 Celestial Shield
// 010215 Invisible Guard
// 010216 Sacred Guard
// 010217 S-Parts ver1.16
// 010218 S-Parts ver2.01
// 010219 Light Relief
// 01021A Shield of Delsaber
// 01021B Force Wall
// 01021C Ranger Wall
// 01021D Hunter Wall
// 01021E Attribute Wall
// 01021F Secret Gear
// 010220 Combat Gear
// 010221 Proto Regene Gear
// 010222 Regenerate Gear
// 010223 Regene Gear Adv.
// 010224 Flowen's Shield
// 010225 Custom Barrier ver.OO
// 010226 DB's Shield
// 010227 Red Ring
// 010228 Tripolic Shield
// 010229 Standstill Shield
// 01022A Safety Heart
// 01022B Kasami Bracer
// 01022C Gods Shield "Suzaku"
// 01022D Gods Shield "Genbu"
// 01022E Gods Shield "Byakko"
// 01022F Gods Shield "Seiryu"
// 010230 Hunter's Shell
// 010231 Rico's Glasses
// 010232 Rico's Earring
// 010233 Blue Ring
// 010234 Barrier
// 010235 Secure Feet
// 010236 Barrier
// 010237 Barrier
// 010238 Barrier
// 010239 Barrier
// 01023A Resta Merge
// 01023B Anti Merge
// 01023C Shifta Merge
// 01023D Deband Merge
// 01023E Foie Merge
// 01023F Gifoie Merge
// 010240 Rafoie Merge
// 010241 Red Merge
// 010242 Barta Merge
// 010243 Gibarta Merge
// 010244 Rabarta Merge
// 010245 Blue Merge
// 010246 Zonde Merge
// 010247 Gizonde Merge
// 010248 Razonde Merge
// 010249 Yellow Merge
// 01024A Recovery Barrier
// 01024B Assist Barrier
// 01024C Red Barrier
// 01024D Blue Barrier
// 01024E Yellow Barrier
// 01024F Weapons Gold Shield
// 010250 Black Gear
// 010251 Works Guard
// 010252 Ragol Ring
// 010253 Blue Ring
// 010254 Blue Ring
// 010255 Blue Ring
// 010256 Blue Ring
// 010257 Blue Ring
// 010258 Blue Ring
// 010259 Blue Ring
// 01025A Blue Ring
// 01025B Green Ring
// 01025C Green Ring
// 01025D Green Ring
// 01025E Green Ring
// 01025F Green Ring
// 010260 Green Ring
// 010261 Green Ring
// 010262 Green Ring
// 010263 Yellow Ring
// 010264 Yellow Ring
// 010265 Yellow Ring
// 010266 Yellow Ring
// 010267 Yellow Ring
// 010268 Yellow Ring
// 010269 Yellow Ring
// 01026A Yellow Ring
// 01026B Purple Ring
// 01026C Purple Ring
// 01026D Purple Ring
// 01026E Purple Ring
// 01026F Purple Ring
// 010270 Purple Ring
// 010271 Purple Ring
// 010272 Purple Ring
// 010273 Anti-Dark Ring
// 010274 White Ring
// 010275 White Ring
// 010276 White Ring
// 010277 White Ring
// 010278 White Ring
// 010279 White Ring
// 01027A White Ring
// 01027B Anti-Light Ring
// 01027C Black Ring
// 01027D Black Ring
// 01027E Black Ring
// 01027F Black Ring
// 010280 Black Ring
// 010281 Black Ring
// 010282 Black Ring
// 010283 Weapons Silver Shield
// 010284 Weapons Copper Shield
// 010285 Gratia
// 010286 Tripolic Reflector
// 010287 Striker Plus
// 010288 Regenerate Gear B.P.
// 010289 Rupika
// 01028A Yata Mirror
// 01028B Bunny Ears
// 01028C Cat Ears
// 01028D Three Seals
// 01028E Gods Shield "Kouryu"
// 01028F DF Shield
// 010290 From the Depths
// 010291 De Rol Le Shield
// 010292 Honeycomb Reflector
// 010293 Epsiguard
// 010294 Angel Ring
// 010295 Union Guard
// 010296 Union Guard
// 010297 Union Guard
// 010298 Union Guard
// 010299 Stink Shield
// 01029A UNKNOWN_B
// 01029B Genpei
// 01029C Genpei
// 01029D Genpei
// 01029E Genpei
// 01029F Genpei
// 0102A0 Genpei
// 0102A1 Genpei
// 0102A2 Genpei
// 0102A3 Genpei
// 0102A4 Genpei
// 0102A5 ????
// 000000 ????
// 000100 Saber
// 000101 Brand
// 000102 Buster
// 000103 Pallasch
// 000104 Gladius
// 000105 DB's Saber
// 000106 Kaladbolg
// 000107 Durandal
// 000108 Galatine
// 000200 Sword
// 000201 Gigush
// 000202 Breaker
// 000203 Claymore
// 000204 Calibur
// 000205 Flowen's Sword
// 000206 Last Survivor
// 000207 Dragon Slayer
// 000300 Dagger
// 000301 Knife
// 000302 Blade
// 000303 Edge
// 000304 Ripper
// 000305 Blade Dance
// 000306 Bloody Art
// 000307 Cross Scar
// 000308 Zero Divide
// 000309 Two Kamui
// 000400 Partisan
// 000401 Halbert
// 000402 Glaive
// 000403 Berdys
// 000404 Gungnir
// 000405 Brionac
// 000406 Vjaya
// 000407 Gae Bolg
// 000408 Asteron Belt
// 000500 Slicer
// 000501 Spinner
// 000502 Cutter
// 000503 Sawcer
// 000504 Diska
// 000505 Slicer of Assassin
// 000506 Diska of Liberator
// 000507 Diska of Braveman
// 000508 Izmaela
// 000600 Handgun
// 000601 Autogun
// 000602 Lockgun
// 000603 Railgun
// 000604 Raygun
// 000605 Varista
// 000606 Custom Ray ver.OO
// 000607 Bravace
// 000608 Tension Blaster
// 000700 Rifle
// 000701 Sniper
// 000702 Blaster
// 000703 Beam
// 000704 Laser
// 000705 Visk-235W
// 000706 Wals-MK2
// 000707 Justy-23ST
// 000708 Rianov 303SNR
// 000709 Rianov 303SNR-1
// 00070A Rianov 303SNR-2
// 00070B Rianov 303SNR-3
// 00070C Rianov 303SNR-4
// 00070D Rianov 303SNR-5
// 000800 Mechgun
// 000801 Assault
// 000802 Repeater
// 000803 Gatling
// 000804 Vulcan
// 000805 M&A60 Vise
// 000806 H&S25 Justice
// 000807 L&K14 Combat
// 000900 Shot
// 000901 Spread
// 000902 Cannon
// 000903 Launcher
// 000904 Arms
// 000905 Crush Bullet
// 000906 Meteor Smash
// 000907 Final Impact
// 000A00 Cane
// 000A01 Stick
// 000A02 Mace
// 000A03 Club
// 000A04 Club of Laconium
// 000A05 Mace of Adaman
// 000A06 Club of Zumiuran
// 000A07 Lollipop
// 000B00 Rod
// 000B01 Pole
// 000B02 Pillar
// 000B03 Striker
// 000B04 Battle Verge
// 000B05 Brave Hammer
// 000B06 Alive Aqhu
// 000B07 Valkyrie
// 000C00 Wand
// 000C01 Staff
// 000C02 Baton
// 000C03 Scepter
// 000C04 Fire Scepter: Agni
// 000C05 Ice Staff: Dagon
// 000C06 Storm Wand: Indra
// 000C07 Earth Wand: Brownie
// 000D00 Photon Claw
// 000D01 Silence Claw
// 000D02 Nei's Claw
// 000D03 Phoenix Claw
// 000E00 Double Saber
// 000E01 Stag Cutlery
// 000E02 Twin Brand
// 000F00 Brave Knuckle
// 000F01 Angry Fist
// 000F02 God Hand
// 000F03 Sonic Knuckle
// 000F04 Star Song
// 001000 Orotiagito
// 001001 Agito
// 001002 Agito
// 001003 Agito
// 001004 Agito
// 001005 Agito
// 001006 Agito
// 001007 Raikiri
// 001100 Soul Eater
// 001101 Soul Banish
// 001200 Spread Needle
// 001300 Holy Ray
// 001400 Inferno Bazooka
// 001401 Rambling May
// 001402 L&K38 Combat
// 001500 Flame Visit
// 001501 Burning Visit
// 001600 Akiko's Frying Pan
// 001700 Sorcerer's Cane
// 001800 S-Beat's Blade
// 001900 P-Arms' Blade
// 001A00 Delsaber's Buster
// 001B00 Bringer's Rifle
// 001C00 Egg Blaster
// 001D00 Psycho Wand
// 001E00 Heaven Punisher
// 001F00 Lavis Cannon
// 002000 Victor Axe
// 002001 Laconium Axe
// 002100 Chain Sawd
// 002200 Caduceus
// 002201 Mercurius Rod
// 002300 Sting Tip
// 002400 Magical Piece
// 002500 Technical Crozier
// 002600 Suppressed Gun
// 002700 Ancient Saber
// 002800 Harisen Battle Fan
// 002900 Yamigarasu
// 002A00 Akiko's Wok
// 002B00 Toy Hammer
// 002C00 Elysion
// 002D00 Red Saber
// 002E00 Meteor Cudgel
// 002F00 Monkey King Bar
// 002F01 Black King Bar
// 003000 Double Cannon
// 003001 Girasole
// 003100 Huge Battle Fan
// 003200 Tsumikiri J-Sword
// 003300 Sealed J-Sword
// 003400 Red Sword
// 003500 Crazy Tune
// 003600 Twin Chakram
// 003700 Wok of Akiko's Shop
// 003800 Lavis Blade
// 003900 Red Dagger
// 003A00 Madam's Parasol
// 003B00 Madam's Umbrella
// 003C00 Imperial Pick
// 003D00 Berdysh
// 003E00 Red Partisan
// 003F00 Flight Cutter
// 004000 Flight Fan
// 004100 Red Slicer
// 004200 Handgun: Guld
// 004201 Master Raven
// 004300 Handgun: Milla
// 004301 Last Swan
// 004400 Red Handgun
// 004500 Frozen Shooter
// 004501 Snow Queen
// 004600 Anti Android Rifle
// 004700 Rocket Punch
// 004800 Samba Maracas
// 004900 Twin Psychogun
// 004A00 Drill Launcher
// 004B00 Guld Milla
// 004B01 Dual Bird
// 004C00 Red Mechgun
// 004D00 Belra Cannon
// 004E00 Panzer Faust
// 004E01 Iron Faust
// 004F00 Summit Moon
// 005000 Windmill
// 005100 Evil Curst
// 005200 Flower Cane
// 005300 Hildebear's Cane
// 005400 Hildeblue's Cane
// 005500 Rabbit Wand
// 005600 Plantain Leaf
// 005601 Fatsia
// 005700 Demonic Fork
// 005800 Striker of Chao
// 005900 Broom
// 005A00 Prophets of Motav
// 005B00 The Sigh of a God
// 005C00 Twinkle Star
// 005D00 Plantain Fan
// 005E00 Twin Blaze
// 005F00 Marina's Bag
// 006000 Dragon's Claw
// 006100 Panther's Claw
// 006200 S-Red's Blade
// 006300 Plantain Huge Fan
// 006400 Chameleon Scythe
// 006500 Yasminkov 3000R
// 006600 Ano Rifle
// 006700 Baranz Launcher
// 006800 Branch of Pakupaku
// 006900 Heart of Poumn
// 006A00 Yasminkov 2000H
// 006B00 Yasminkov 7000V
// 006C00 Yasminkov 9000M
// 006D00 Maser Beam
// 006D01 Power Maser
// 006E00 Game Magazine
// 006E01 LOGiN
// 006F00 Flower Bouquet
// 007000 Saber
// 007001 Saber
// 007002 Saber
// 007003 Saber
// 007004 Saber
// 007005 Saber
// 007006 Saber
// 007007 Saber
// 007008 Saber
// 007009 Saber
// 00700A Saber
// 00700B Saber
// 00700C Saber
// 00700D Saber
// 00700E Saber
// 00700F Saber
// 007010 Saber
// 007100 Sword
// 007101 Sword
// 007102 Sword
// 007103 Sword
// 007104 Sword
// 007105 Sword
// 007106 Sword
// 007107 Sword
// 007108 Sword
// 007109 Sword
// 00710A Sword
// 00710B Sword
// 00710C Sword
// 00710D Sword
// 00710E Sword
// 00710F Sword
// 007110 Sword
// 007200 Blade
// 007201 Blade
// 007202 Blade
// 007203 Blade
// 007204 Blade
// 007205 Blade
// 007206 Blade
// 007207 Blade
// 007208 Blade
// 007209 Blade
// 00720A Blade
// 00720B Blade
// 00720C Blade
// 00720D Blade
// 00720E Blade
// 00720F Blade
// 007210 Blade
// 007300 Partisan
// 007301 Partisan
// 007302 Partisan
// 007303 Partisan
// 007304 Partisan
// 007305 Partisan
// 007306 Partisan
// 007307 Partisan
// 007308 Partisan
// 007309 Partisan
// 00730A Partisan
// 00730B Partisan
// 00730C Partisan
// 00730D Partisan
// 00730E Partisan
// 00730F Partisan
// 007310 Partisan
// 007400 Slicer
// 007401 Slicer
// 007402 Slicer
// 007403 Slicer
// 007404 Slicer
// 007405 Slicer
// 007406 Slicer
// 007407 Slicer
// 007408 Slicer
// 007409 Slicer
// 00740A Slicer
// 00740B Slicer
// 00740C Slicer
// 00740D Slicer
// 00740E Slicer
// 00740F Slicer
// 007410 Slicer
// 007500 Gun
// 007501 Gun
// 007502 Gun
// 007503 Gun
// 007504 Gun
// 007505 Gun
// 007506 Gun
// 007507 Gun
// 007508 Gun
// 007509 Gun
// 00750A Gun
// 00750B Gun
// 00750C Gun
// 00750D Gun
// 00750E Gun
// 00750F Gun
// 007510 Gun
// 007600 Rifle
// 007601 Rifle
// 007602 Rifle
// 007603 Rifle
// 007604 Rifle
// 007605 Rifle
// 007606 Rifle
// 007607 Rifle
// 007608 Rifle
// 007609 Rifle
// 00760A Rifle
// 00760B Rifle
// 00760C Rifle
// 00760D Rifle
// 00760E Rifle
// 00760F Rifle
// 007610 Rifle
// 007700 Mechgun
// 007701 Mechgun
// 007702 Mechgun
// 007703 Mechgun
// 007704 Mechgun
// 007705 Mechgun
// 007706 Mechgun
// 007707 Mechgun
// 007708 Mechgun
// 007709 Mechgun
// 00770A Mechgun
// 00770B Mechgun
// 00770C Mechgun
// 00770D Mechgun
// 00770E Mechgun
// 00770F Mechgun
// 007710 Mechgun
// 007800 Shot
// 007801 Shot
// 007802 Shot
// 007803 Shot
// 007804 Shot
// 007805 Shot
// 007806 Shot
// 007807 Shot
// 007808 Shot
// 007809 Shot
// 00780A Shot
// 00780B Shot
// 00780C Shot
// 00780D Shot
// 00780E Shot
// 00780F Shot
// 007810 Shot
// 007900 Cane
// 007901 Cane
// 007902 Cane
// 007903 Cane
// 007904 Cane
// 007905 Cane
// 007906 Cane
// 007907 Cane
// 007908 Cane
// 007909 Cane
// 00790A Cane
// 00790B Cane
// 00790C Cane
// 00790D Cane
// 00790E Cane
// 00790F Cane
// 007910 Cane
// 007A00 Rod
// 007A01 Rod
// 007A02 Rod
// 007A03 Rod
// 007A04 Rod
// 007A05 Rod
// 007A06 Rod
// 007A07 Rod
// 007A08 Rod
// 007A09 Rod
// 007A0A Rod
// 007A0B Rod
// 007A0C Rod
// 007A0D Rod
// 007A0E Rod
// 007A0F Rod
// 007A10 Rod
// 007B00 Wand
// 007B01 Wand
// 007B02 Wand
// 007B03 Wand
// 007B04 Wand
// 007B05 Wand
// 007B06 Wand
// 007B07 Wand
// 007B08 Wand
// 007B09 Wand
// 007B0A Wand
// 007B0B Wand
// 007B0C Wand
// 007B0D Wand
// 007B0E Wand
// 007B0F Wand
// 007B10 Wand
// 007C00 Twin
// 007C01 Twin
// 007C02 Twin
// 007C03 Twin
// 007C04 Twin
// 007C05 Twin
// 007C06 Twin
// 007C07 Twin
// 007C08 Twin
// 007C09 Twin
// 007C0A Twin
// 007C0B Twin
// 007C0C Twin
// 007C0D Twin
// 007C0E Twin
// 007C0F Twin
// 007C10 Twin
// 007D00 Claw
// 007D01 Claw
// 007D02 Claw
// 007D03 Claw
// 007D04 Claw
// 007D05 Claw
// 007D06 Claw
// 007D07 Claw
// 007D08 Claw
// 007D09 Claw
// 007D0A Claw
// 007D0B Claw
// 007D0C Claw
// 007D0D Claw
// 007D0E Claw
// 007D0F Claw
// 007D10 Claw
// 007E00 Bazooka
// 007E01 Bazooka
// 007E02 Bazooka
// 007E03 Bazooka
// 007E04 Bazooka
// 007E05 Bazooka
// 007E06 Bazooka
// 007E07 Bazooka
// 007E08 Bazooka
// 007E09 Bazooka
// 007E0A Bazooka
// 007E0B Bazooka
// 007E0C Bazooka
// 007E0D Bazooka
// 007E0E Bazooka
// 007E0F Bazooka
// 007E10 Bazooka
// 007F00 Needle
// 007F01 Needle
// 007F02 Needle
// 007F03 Needle
// 007F04 Needle
// 007F05 Needle
// 007F06 Needle
// 007F07 Needle
// 007F08 Needle
// 007F09 Needle
// 007F0A Needle
// 007F0B Needle
// 007F0C Needle
// 007F0D Needle
// 007F0E Needle
// 007F0F Needle
// 007F10 Needle
// 008000 Scythe
// 008001 Scythe
// 008002 Scythe
// 008003 Scythe
// 008004 Scythe
// 008005 Scythe
// 008006 Scythe
// 008007 Scythe
// 008008 Scythe
// 008009 Scythe
// 00800A Scythe
// 00800B Scythe
// 00800C Scythe
// 00800D Scythe
// 00800E Scythe
// 00800F Scythe
// 008010 Scythe
// 008100 Hammer
// 008101 Hammer
// 008102 Hammer
// 008103 Hammer
// 008104 Hammer
// 008105 Hammer
// 008106 Hammer
// 008107 Hammer
// 008108 Hammer
// 008109 Hammer
// 00810A Hammer
// 00810B Hammer
// 00810C Hammer
// 00810D Hammer
// 00810E Hammer
// 00810F Hammer
// 008110 Hammer
// 008200 Moon
// 008201 Moon
// 008202 Moon
// 008203 Moon
// 008204 Moon
// 008205 Moon
// 008206 Moon
// 008207 Moon
// 008208 Moon
// 008209 Moon
// 00820A Moon
// 00820B Moon
// 00820C Moon
// 00820D Moon
// 00820E Moon
// 00820F Moon
// 008210 Moon
// 008300 Psychogun
// 008301 Psychogun
// 008302 Psychogun
// 008303 Psychogun
// 008304 Psychogun
// 008305 Psychogun
// 008306 Psychogun
// 008307 Psychogun
// 008308 Psychogun
// 008309 Psychogun
// 00830A Psychogun
// 00830B Psychogun
// 00830C Psychogun
// 00830D Psychogun
// 00830E Psychogun
// 00830F Psychogun
// 008310 Psychogun
// 008400 Punch
// 008401 Punch
// 008402 Punch
// 008403 Punch
// 008404 Punch
// 008405 Punch
// 008406 Punch
// 008407 Punch
// 008408 Punch
// 008409 Punch
// 00840A Punch
// 00840B Punch
// 00840C Punch
// 00840D Punch
// 00840E Punch
// 00840F Punch
// 008410 Punch
// 008500 Windmill
// 008501 Windmill
// 008502 Windmill
// 008503 Windmill
// 008504 Windmill
// 008505 Windmill
// 008506 Windmill
// 008507 Windmill
// 008508 Windmill
// 008509 Windmill
// 00850A Windmill
// 00850B Windmill
// 00850C Windmill
// 00850D Windmill
// 00850E Windmill
// 00850F Windmill
// 008510 Windmill
// 008600 Harisen
// 008601 Harisen
// 008602 Harisen
// 008603 Harisen
// 008604 Harisen
// 008605 Harisen
// 008606 Harisen
// 008607 Harisen
// 008608 Harisen
// 008609 Harisen
// 00860A Harisen
// 00860B Harisen
// 00860C Harisen
// 00860D Harisen
// 00860E Harisen
// 00860F Harisen
// 008610 Harisen
// 008700 Katana
// 008701 Katana
// 008702 Katana
// 008703 Katana
// 008704 Katana
// 008705 Katana
// 008706 Katana
// 008707 Katana
// 008708 Katana
// 008709 Katana
// 00870A Katana
// 00870B Katana
// 00870C Katana
// 00870D Katana
// 00870E Katana
// 00870F Katana
// 008710 Katana
// 008800 J-Cutter
// 008801 J-Cutter
// 008802 J-Cutter
// 008803 J-Cutter
// 008804 J-Cutter
// 008805 J-Cutter
// 008806 J-Cutter
// 008807 J-Cutter
// 008808 J-Cutter
// 008809 J-Cutter
// 00880A J-Cutter
// 00880B J-Cutter
// 00880C J-Cutter
// 00880D J-Cutter
// 00880E J-Cutter
// 00880F J-Cutter
// 008810 J-Cutter
// 008900 Musashi
// 008901 Yamato
// 008902 Asuka
// 008903 Sange & Yasha
// 008A00 Sange
// 008A01 Yasha
// 008A02 Kamui
// 008B00 Photon Launcher
// 008B01 Guilty Light
// 008B02 Red Scorpio
// 008B03 Phonon Maser
// 008C00 Talis
// 008C01 Mahu
// 008C02 HItogata
// 008C03 Dancing Hitogata
// 008C04 Kunai
// 008D00 Nug2000-Bazooka
// 008E00 S-Berill's Hands #0
// 008E01 S-Berill's Hands #1
// 008F00 Flowen's Sword
// 008F01 Flowen's Sword
// 008F02 Flowen's Sword
// 008F03 Flowen's Sword
// 008F04 Flowen's Sword
// 008F05 Flowen's Sword
// 008F06 Flowen's Sword
// 008F07 Flowen's Sword
// 008F08 Flowen's Sword
// 009000 DB's Saber
// 009001 DB's Saber
// 009002 DB's Saber
// 009003 DB's Saber
// 009004 DB's Saber
// 009005 DB's Saber
// 009006 DB's Saber
// 009007 DB's Saber
// 009008 DB's Saber
// 009100 Gi Gue Bazooka
// 009200 Guardianna
// 009300 Viridia Card
// 009301 Greenill Card
// 009302 Skyly Card
// 009303 Bluefull Card
// 009304 Purplenum Card
// 009305 Pinkal Card
// 009306 Redria Card
// 009307 Oran Card
// 009308 Yellowboze Card
// 009309 Whitill Card
// 009400 Morning Glory
// 009500 Partisan of Lightning
// 009600 Gal Wind
// 009700 Zanba
// 009800 Rika's Claw
// 009900 Angel Harp
// 009A00 Demolition Comet
// 009B00 Nei's Claw
// 009C00 Rainbow Baton
// 009D00 Dark Flow
// 009E00 Dark Meteor
// 009F00 Dark Bridge
// 00A000 G-Assassin's Sabers
// 00A100 Rappy's Fan
// 00A200 Booma's Claw
// 00A201 Gobooma's Claw
// 00A202 Gigobooma's Claw
// 00A300 Ruby Bullet
// 00A400 Amore Rose
// 00A500 Swords
// 00A501 Swords
// 00A502 Swords
// 00A503 Swords
// 00A504 Swords
// 00A505 Swords
// 00A506 Swords
// 00A507 Swords
// 00A508 Swords
// 00A509 Swords
// 00A50A Swords
// 00A50B Swords
// 00A50C Swords
// 00A50D Swords
// 00A50E Swords
// 00A50F Swords
// 00A510 Swords
// 00A600 Launcher
// 00A601 Launcher
// 00A602 Launcher
// 00A603 Launcher
// 00A604 Launcher
// 00A605 Launcher
// 00A606 Launcher
// 00A607 Launcher
// 00A608 Launcher
// 00A609 Launcher
// 00A60A Launcher
// 00A60B Launcher
// 00A60C Launcher
// 00A60D Launcher
// 00A60E Launcher
// 00A60F Launcher
// 00A610 Launcher
// 00A700 Cards
// 00A701 Cards
// 00A702 Cards
// 00A703 Cards
// 00A704 Cards
// 00A705 Cards
// 00A706 Cards
// 00A707 Cards
// 00A708 Cards
// 00A709 Cards
// 00A70A Cards
// 00A70B Cards
// 00A70C Cards
// 00A70D Cards
// 00A70E Cards
// 00A70F Cards
// 00A710 Cards
// 00A800 Knuckle
// 00A801 Knuckle
// 00A802 Knuckle
// 00A803 Knuckle
// 00A804 Knuckle
// 00A805 Knuckle
// 00A806 Knuckle
// 00A807 Knuckle
// 00A808 Knuckle
// 00A809 Knuckle
// 00A80A Knuckle
// 00A80B Knuckle
// 00A80C Knuckle
// 00A80D Knuckle
// 00A80E Knuckle
// 00A80F Knuckle
// 00A810 Knuckle
// 00A900 Axe
// 00A901 Axe
// 00A902 Axe
// 00A903 Axe
// 00A904 Axe
// 00A905 Axe
// 00A906 Axe
// 00A907 Axe
// 00A908 Axe
// 00A909 Axe
// 00A90A Axe
// 00A90B Axe
// 00A90C Axe
// 00A90D Axe
// 00A90E Axe
// 00A90F Axe
// 00A910 Axe
// 00AA00 Slicer of Fanatic
// 00AB00 Lame d'Argent
// 00AC00 Excalibur
// 00AD00 Rage de Feu
// 00AD01 Rage de Feu
// 00AD02 Rage de Feu
// 00AD03 Rage de Feu
// 00AE00 Daisy Chain
// 00AF00 Ophelie Seize
// 00B000 Mille Marteaux
// 00B100 Le Cogneur
// 00B200 Commander Blade
// 00B300 Vivienne
// 00B400 Kusanagi
// 00B500 Sacred Duster
// 00B600 Guren
// 00B700 Shouren
// 00B800 Jizai
// 00B900 Flamberge
// 00BA00 Yunchang
// 00BB00 Snake Spire
// 00BC00 Flapjack Flapper
// 00BD00 Getsugasan
// 00BE00 Maguwa
// 00BF00 Heaven Striker
// 00C000 Cannon Rouge
// 00C100 Meteor Rouge
// 00C200 Solferino
// 00C300 Clio
// 00C400 Siren Glass Hammer
// 00C500 Glide Divine
// 00C600 Shichishito
// 00C700 Murasame
// 00C800 Daylight Scar
// 00C900 Decalog
// 00CA00 5th Anniv. Blade
// 00CB00 Tyrell's Parasol
// 00CC00 Akiko's Cleaver
// 00CD00 Tanegashima
// 00CE00 Tree Clippers
// 00CF00 Nice Shot
// 00D000 Unused Weapon38
// 00D100 Unused Weapon39
// 00D200 Ano Bazooka
// 00D300 Synthesizer
// 00D400 Bamboo Spear
// 00D500 Kan'ei Tsuho
// 00D600 Jitte
// 00D700 Butterfly Net
// 00D800 Syringe
// 00D900 Battledore
// 00DA00 Racket
// 00DB00 Hammer
// 00DC00 Great Bouquet
// 00DD00 TypeSA/Saber
// 00DE00 TypeSL/Saber
// 00DE01 TypeSL/Slicer
// 00DE02 TypeSL/Claw
// 00DE03 TypeSL/Katana
// 00DF00 TypeJS/Saber
// 00DF01 TypeJS/Slicer
// 00DF02 TypeJS/J-Sword
// 00E000 TypeSW/Sword
// 00E001 TypeSW/Slicer
// 00E002 TypeSW/J-Sword
// 00E100 TypeRO/Sword
// 00E101 TypeRO/Halbert
// 00E102 TypeRO/Rod
// 00E200 TypeBL/Blade
// 00E300 TypeKN/Blade
// 00E301 TypeKN/Claw
// 00E400 TypeHA/Halbert
// 00E401 TypeHA/Rod
// 00E500 TypeDS/D.Saber
// 00E501 TypeDS/Rod
// 00E502 TypeDS
// 00E600 TypeCL/Claw
// 00E700 TypeSS/Sw
// 00E800 TypeGU/Hand
// 00E801 TypeGU/Mechgun
// 00E900 TypeRI/Rifle
// 00EA00 TypeME/Mechgun
// 00EB00 TypeSH/Shot
// 00EC00 TypeWA/Wand
// 00ED00 ????
// 010100 Frame
// 010101 Armor
// 010102 Psy Armor
// 010103 Giga Frame
// 010104 Soul Frame
// 010105 Cross Armor
// 010106 Solid Frame
// 010107 Brave Armor
// 010108 Hyper Frame
// 010109 Grand Armor
// 01010A Shock Frame
// 01010B King's Frame
// 01010C Dragon Frame
// 01010D Absorb Armor
// 01010E Protect Frame
// 01010F General Armor
// 010110 Perfect Frame
// 010111 Valiant Frame
// 010112 Imperial Armor
// 010113 Holiness Armor
// 010114 Guardian Armor
// 010115 Divinity Armor
// 010116 Ultimate Frame
// 010117 Celestial Armor
// 010118 Hunter Field
// 010119 Ranger Field
// 01011A Force Field
// 01011B Revival Garment
// 01011C Spirit Garment
// 01011D Stink Frame
// 01011E D-Parts ver1.01
// 01011F D-Parts ver2.10
// 010120 Parasite Wear: De Rol
// 010121 Parasite Wear: Nelgal
// 010122 Parasite Wear: Vajulla
// 010123 Sense Plate
// 010124 Graviton Plate
// 010125 Attribute Plate
// 010126 Flowen's Frame
// 010127 Custom Frame ver.OO
// 010128 DB's Armor
// 010129 Guard Wave
// 01012A DF Field
// 01012B Luminous Field
// 01012C Chu Chu Fever
// 01012D Love Heart
// 01012E Flame Garment
// 01012F Virus Armor: Lafuteria
// 010130 Brightness Circle
// 010131 Aura Field
// 010132 Electro Frame
// 010133 Sacred Cloth
// 010134 Smoking Plate
// 010135 Star Cuirass
// 010136 Black Hound Cuirass
// 010137 Morning Prayer
// 010138 Black Odoshi Domaru
// 010139 Red Odoshi Domaru
// 01013A Black Odoshi Red Nimaidou
// 01013B Blue Odoshi Violet Nimaidou
// 01013C Dirty Lifejacket
// 01013D Kroe's Sweater
// 01013E Wedding Dress
// 01013F Sonic Team Armor
// 010140 Red Coat
// 010141 Thirteen
// 010142 Mother Garb
// 010143 Mother Garb+
// 010144 Dress Plate
// 010145 Sweetheart
// 010146 Ignition Cloak
// 010147 Congeal Cloak
// 010148 Tempest Cloak
// 010149 Cursed Cloak
// 01014A Select Cloak
// 01014B Spirit Cuirass
// 01014C Revival Cuirass
// 01014D Alliance Uniform
// 01014E Officer Uniform
// 01014F Commander Uniform
// 010150 Crimson Coat
// 010151 Infantry Gear
// 010152 Lieutenant Gear
// 010153 Infantry Mantle
// 010154 Lieutenant Mantle
// 010155 Union Field
// 010156 Samurai Armor
// 010157 Stealth Suit
// 010158 ????
// 010300 Knight/Power
// 010301 General/Power
// 010302 Ogre/Power
// 010303 God/Power
// 010304 Priest/Mind
// 010305 General/Mind
// 010306 Angel/Mind
// 010307 God/Mind
// 010308 Marksman/Arm
// 010309 General/Arm
// 01030A Elf/Arm
// 01030B God/Arm
// 01030C Thief/Legs
// 01030D General/Legs
// 01030E Elf/Legs
// 01030F God/Legs
// 010310 Digger/HP
// 010311 General/HP
// 010312 Dragon/HP
// 010313 God/HP
// 010314 Magician/TP
// 010315 General/TP
// 010316 Angel/TP
// 010317 God/TP
// 010318 Warrior/Body
// 010319 General/Body
// 01031A Metal/Body
// 01031B God/Body
// 01031C Angel/Luck
// 01031D God/Luck
// 01031E Master/Ability
// 01031F Hero/Ability
// 010320 God/Ability
// 010321 Resist/Fire
// 010322 Resist/Flame
// 010323 Resist/Burning
// 010324 Resist/Cold
// 010325 Resist/Freeze
// 010326 Resist/Blizzard
// 010327 Resist/Shock
// 010328 Resist/Thunder
// 010329 Resist/Storm
// 01032A Resist/Light
// 01032B Resist/Saint
// 01032C Resist/Holy
// 01032D Resist/Dark
// 01032E Resist/Evil
// 01032F Resist/Devil
// 010330 All/Resist
// 010331 Super/Resist
// 010332 Perfect/Resist
// 010333 HP/Restorate
// 010334 HP/Generate
// 010335 HP/Revival
// 010336 TP/Restorate
// 010337 TP/Generate
// 010338 TP/Revival
// 010339 PB/Amplifier
// 01033A PB/Generate
// 01033B PB/Create
// 01033C Wizard/Technique
// 01033D Devil/Technique
// 01033E God/Technique
// 01033F General/Battle
// 010340 Devil/Battle
// 010341 God/Battle
// 010342 Cure/Poison
// 010343 Cure/Paralysis
// 010344 Cure/Slow
// 010345 Cure/Confuse
// 010346 Cure/Freeze
// 010347 Cure/Shock
// 010348 Yasakani Magatama
// 010349 V101
// 01034A V501
// 01034B V502
// 01034C V801
// 01034D Limiter
// 01034E Adept
// 01034F Swordsman Lore
// 010350 Proof of Sword-Saint
// 010351 Smartlink
// 010352 Divine Protection
// 010353 Heavenly/Battle
// 010354 Heavenly/Power
// 010355 Heavenly/Mind
// 010356 Heavenly/Arms
// 010357 Heavenly/Legs
// 010358 Heavenly/Body
// 010359 Heavenly/Luck
// 01035A Heavenly/Ability
// 01035B Centurion/Ability
// 01035C Friend Ring
// 01035D Heavenly/HP
// 01035E Heavenly/TP
// 01035F Heavenly/Resist
// 010360 Heavenly/Technique
// 010361 HP/Ressurection
// 010362 TP/Ressurection
// 010363 PB/Increase
// 010364 ????
// 030000 Monomate
// 030001 Dimate
// 030002 Trimate
// 030100 Monofluid
// 030101 Difluid
// 030102 Trifluid
// 030200 disk
// 030201 disk
// 030202 disk
// 030203 disk
// 030204 disk
// 030205 disk
// 030206 disk
// 030207 disk
// 030208 disk
// 030209 disk
// 03020A disk
// 03020B disk
// 03020C disk
// 03020D disk
// 03020E disk
// 03020F disk
// 030210 disk
// 030211 disk
// 030212 disk
// 030300 Sol Atomizer
// 030400 Moon Atomizer
// 030500 Star Atomizer
// 030600 Antidote
// 030601 Antiparalysis
// 030700 Telepipe
// 030800 Trap Vision
// 030900 Scape Doll
// 030A00 Monogrinder
// 030A01 Digrinder
// 030A02 Trigrinder
// 030B00 Power Material
// 030B01 Mind Material
// 030B02 Evade Material
// 030B03 HP Material
// 030B04 TP Material
// 030B05 Def Material
// 030B06 Luck Material
// 030C00 Cell of Mag 502
// 030C01 Cell of Mag 213
// 030C02 Parts of RoboChao
// 030C03 Heart of Opa Opa
// 030C04 Heart of Pian
// 030C05 Heart of Chao
// 030D00 Sorcerer's Right Arm
// 030D01 S-beat's Arms
// 030D02 P-arm's Arms
// 030D03 Delsaber's Right Arm
// 030D04 Bringer's Right Arm
// 030D05 Delsaber's Left Arm
// 030D06 S-red's Arms
// 030D07 Dragon's Claw
// 030D08 Hildebear's Head
// 030D09 Hildeblue's Head
// 030D0A Parts of Baranz
// 030D0B Belra's Right Arm
// 030D0C Gi Gue's body
// 030D0D Sinow Berill's Arms
// 030D0E Grass Assassin's Arms
// 030D0F Booma's Right Arm
// 030D10 Gobooma's Right Arm
// 030D11 Gigobooma's Right Arm
// 030D12 Gal Gryphon's Wing
// 030D13 Rappy's Wing
// 030D14 Cladding of Epsilon
// 030D15 De Rol Le Shell
// 030E00 Berill Photon
// 030E01 Parasitic gene "Flow"
// 030E02 Magic Stone "Iritista"
// 030E03 Blue-black stone
// 030E04 Syncesta
// 030E05 Magic Water
// 030E06 Parasitic cell Type D
// 030E07 magic rock "Heart Key"
// 030E08 magic rock "Moola"
// 030E09 Star Amplifier
// 030E0A Book of Hitogata
// 030E0B Heart of Chu Chu
// 030E0C Parts of Egg Blaster
// 030E0D Heart of Angel
// 030E0E Heart of Devil
// 030E0F Kit of Hamburger
// 030E10 Panther's Spirit
// 030E11 Kit of Mark III
// 030E12 Kit of Master System
// 030E13 Kit of Genesis
// 030E14 Kit of Sega Saturn
// 030E15 Kit of Dreamcast
// 030E16 Amplifier of Resta
// 030E17 Amplifier of Anti
// 030E18 Amplifier of Shifta
// 030E19 Amplifier of Deband
// 030E1A Amplifier of Foie
// 030E1B Amplifier of Gifoie
// 030E1C Amplifier of Rafoie
// 030E1D Amplifier of Barta
// 030E1E Amplifier of Gibarta
// 030E1F Amplifier of Rabarta
// 030E20 Amplifier of Zonde
// 030E21 Amplifier of Gizonde
// 030E22 Amplifier of Razonde
// 030E23 Amplifier of Red
// 030E24 Amplifier of Blue
// 030E25 Amplifier of Yellow
// 030E26 Heart of Kapu Kapu
// 030E27 Photon Booster
// 030F00 AddSlot
// 031000 Photon Drop
// 031001 Photon Sphere
// 031002 Photon Crystal
// 031003 Secret Ticket
// 031004 Photon Ticket
// 031100 Book of Katana 1
// 031101 Book of Katana 2
// 031102 Book of Katana 3
// 031200 Weapons Bronze Badge
// 031201 Weapons Silver Badge
// 031202 Weapons Gold Badge
// 031203 Weapons Crystal Badge
// 031204 Weapons Steel Badge
// 031205 Weapons Aluminum Badge
// 031206 Weapons Leather Badge
// 031207 Weapons Bone Badge
// 031208 Letter of appreciation
// 031209 Item Ticket
// 03120A Valentine's Chocolate
// 03120B New Year's Card
// 03120C Christmas Card
// 03120D Birthday Card
// 03120E Proof of Sonic Team
// 03120F Special Event Ticket
// 031210 Flower Bouquet
// 031211 Cake
// 031212 Accessories
// 031213 Mr. Naka's Business Card
// 031300 Present
// 031400 Chocolate
// 031401 Candy
// 031402 Cake
// 031403 Weapons Silver Badge
// 031404 Weapons Gold Badge
// 031405 Weapons Crystal Badge
// 031406 Weapons Steel Badge
// 031407 Weapons Aluminum Badge
// 031408 Weapons Leather Badge
// 031409 Weapons Bone Badge
// 03140A Bouquet
// 03140B Decoction
// 031500 Christmas Present
// 031501 Easter Egg
// 031502 Jack-O'-Lantern
// 031600 Disk Vol.1 "Wedding March"
// 031601 Disk Vol.2 "Day Light"
// 031602 Disk Vol.3 "Burning Rangers"
// 031603 Disk Vol.4 "Open Your Heart"
// 031604 Disk Vol.5 "Live & Learn"
// 031605 Disk Vol.6 "NiGHTS"
// 031606 Disk Vol.7 "Ending Theme (Piano ver.)"
// 031607 Disk Vol.8 "Heart to Heart"
// 031608 Disk Vol.9 "Strange Blue"
// 031609 Disk Vol.10 "Reunion System"
// 03160A Disk Vol.11 "Pinnacles"
// 03160B Disk Vol.12 "Fight inside the Spaceship"
// 031700 Hunters Report
// 031701 Hunters Report
// 031702 Hunters Report
// 031703 Hunters Report
// 031704 Hunters Report
// 031800 Tablet
// 031801 Unused Item01
// 031802 Dragon Scale
// 031803 Heaven Striker Coat
// 031804 Pioneer Parts
// 031805 Amitie's Memo
// 031806 Heart of Morolian
// 031807 Rappy's Beak
// 031808 Yahoo!'s engine
// 031809 D-Photon Core
// 03180A Liberta Kit
// 03180B Cell of Mag 0503
// 03180C Cell of Mag 0504
// 03180D Cell of Mag 0505
// 03180E Cell of Mag 0506
// 03180F Cell of Mag 0507
// 031900 Team Points 500
// 031901 Team Points 1000
// 031902 Team Points 5000
// 031903 Team Points 10000
// 031A00 ????
// 020000 Mag
// 020100 Varuna
// 020200 Mitra
// 020300 Surya
// 020400 Vayu
// 020500 Varaha
// 020600 Kama
// 020700 Ushasu
// 020800 Apsaras
// 020900 Kumara
// 020A00 Kaitabha
// 020B00 Tapas
// 020C00 Bhirava
// 020D00 Kalki
// 020E00 Rudra
// 020F00 Marutah
// 021000 Yaksa
// 021100 Sita
// 021200 Garuda
// 021300 Nandin
// 021400 Ashvinau
// 021500 Ribhava
// 021600 Soma
// 021700 Ila
// 021800 Durga
// 021900 Vritra
// 021A00 Namuci
// 021B00 Sumba
// 021C00 Naga
// 021D00 Pitri
// 021E00 Kabanda
// 021F00 Ravana
// 022000 Marica
// 022100 Soniti
// 022200 Preta
// 022300 Andhaka
// 022400 Bana
// 022500 Naraka
// 022600 Madhu
// 022700 Churel
// 022800 Robochao
// 022900 Opa-Opa
// 022A00 Pian
// 022B00 Chao
// 022C00 Chu Chu
// 022D00 Kapu Kapu
// 022E00 Angel's Wing
// 022F00 Devil's Wing
// 023000 Elenor
// 023100 Mark III
// 023200 Master System
// 023300 Genesis
// 023400 Sega Saturn
// 023500 Dreamcast
// 023600 Hamburger
// 023700 Panzer's Tail
// 023800 Devil's Tail
// 023900 Deva
// 023A00 Rati
// 023B00 Savitri
// 023C00 Rukmin
// 023D00 Pushan
// 023E00 Diwari
// 023F00 Sato

