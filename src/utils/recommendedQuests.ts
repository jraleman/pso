// https://wiki.pioneer2.net/index.php?title=Quests

const questsByEpisode = {
    1: [
        'forest',
        'caves',
        'mines',
        'ruins'
    ],
    2: [
        'temple',
        'spaceship',
        'cca',
        'seabed'
    ],
    4: [
        'crater',
        'desert'
    ],
};

const questsByArea: any = {
    forest: [
        { 
            shortName: 'TE',
            name: 'Tyrell\'s Ego',
            menuPath: 'VR',
            link: 'https://wiki.pioneer2.net/index.php?title=Tyrell%27s_Ego'
        },
        { 
            shortName: 'RFR',
            name: 'Rescue from Ragol',
            menuPath: 'Retrieval',
            link: 'https://wiki.pioneer2.net/index.php?title=Rescue_from_Ragol'
        },
        { 
            shortName: 'MAE',
            name: 'Maximum Attack E: Episode 1',
            menuPath: 'Maximum Attack',
            link: 'https://wiki.pioneer2.net/index.php?title=Maximum_Attack_E:_Episode_1'
        },
    ],
    caves: [
        { 
            shortName: 'MA1B',
            name: 'Maximum Attack 4th Stage -1B-',
            menuPath: 'Maximum Attack',
            link: 'https://wiki.pioneer2.net/index.php?title=Maximum_Attack_4th_Stage_-1B-'
        },
    ],
    mines: [
        { 
            shortName: 'LSB',
            name: 'Lost SOUL BLADE',
            menuPath: 'Retrieval',
            link: 'https://wiki.pioneer2.net/index.php?title=Lost_SOUL_BLADE'
        },
        { 
            shortName: 'SU3',
            name: 'Sweep-up Operation #3',
            menuPath: 'Extermination',
            link: 'https://wiki.pioneer2.net/index.php?title=Sweep-up_Operation_3'
        },
        { 
            shortName: 'EN3',
            name: 'Endless Nightmare #3',
            menuPath: 'Extermination',
            link: 'https://wiki.pioneer2.net/index.php?title=Endless_Nightmare_3',
            note: 'if good sinow ID',
        },
    ],
    ruins: [
        { 
            shortName: 'DR',
            name: 'Dark Research 2.0',
            menuPath: 'Retrieval',
            link: 'https://wiki.pioneer2.net/index.php?title=Dark_Research_2.0'
        },
        { 
            shortName: 'EN4',
            name: 'Endless Nightmare #4',
            menuPath: 'Extermination',
            link: 'https://wiki.pioneer2.net/index.php?title=Endless_Nightmare_4',
        },
    ],
    temple: [
        { 
            shortName: 'CCC',
            name: 'CAL\'s Clock Challenge',
            menuPath: 'Extermination',
            link: 'https://wiki.pioneer2.net/index.php?title=CAL%27s_Clock_Challenge'
        },
    ],
    spaceship: [
        { 
            shortName: 'SU6',
            name: 'Sweep-up Operation #6',
            menuPath: 'Extermination',
            link: 'https://wiki.pioneer2.net/index.php?title=Sweep-up_Operation_6'
        },
        { 
            shortName: 'LBA',
            name: 'Lost BIND ASSAULT',
            menuPath: 'Retrieval',
            link: 'https://wiki.pioneer2.net/index.php?title=Lost_BIND_ASSAULT'
        },
        { 
            shortName: 'GDVD',
            name: 'Gal Da Val\'s Darkness',
            menuPath: 'Extermination',
            link: 'https://wiki.pioneer2.net/index.php?title=Gal_Da_Val%27s_Darkness'
        },
    ],
    cca: [
        { 
            shortName: 'MA2A',
            name: 'Maximum Attack 4th Stage -2A-',
            menuPath: 'Maximum Attack',
            link: 'https://wiki.pioneer2.net/index.php?title=Maximum_Attack_4th_Stage_-2A-'
        },
        { 
            shortName: 'MA2C',
            name: 'Maximum Attack 4th Stage -2C-',
            menuPath: 'Maximum Attack',
            link: 'https://wiki.pioneer2.net/index.php?title=Maximum_Attack_4th_Stage_-2C-',
            note: 'if good ID'
        },
    ],
    seabed: [
        { 
            shortName: 'SU8',
            name: 'Sweep-up Operation #8',
            menuPath: 'Extermination',
            link: 'https://wiki.pioneer2.net/index.php?title=Sweep-up_Operation_8'
        },
        { 
            shortName: 'PW3',
            name: 'Phantasmal World #3',
            menuPath: 'Extermination',
            link: 'https://wiki.pioneer2.net/index.php?title=Phantasmal_World_3'
        },
    ],
    crater: [
        { 
            shortName: 'MA4A',
            name: 'Maximum Attack 4th Stage -4A-',
            menuPath: 'Maximum Attack',
            link: 'https://wiki.pioneer2.net/index.php?title=Maximum_Attack_4th_Stage_-4A-'
        },
        { 
            shortName: 'MAE',
            name: 'Maximum Attack E: Episode 4',
            menuPath: 'Maximum Attack',
            link: 'https://wiki.pioneer2.net/index.php?title=Maximum_Attack_E:_Episode_4'
        },
    ],
    desert: [
        { 
            shortName: 'SU12',
            name: 'Sweep-up Operation #12',
            menuPath: 'Extermination',
            link: 'https://wiki.pioneer2.net/index.php?title=Sweep-up_Operation_12'
        },
        { 
            shortName: 'NMU3',
            name: 'New Mop-Up Operation #3',
            menuPath: 'Extermination',
            link: 'https://wiki.pioneer2.net/index.php?title=New_Mop-Up_Operation_3'
        },
    ]
};

// list section ids drops, and recommendation using section id by area
const questsBySectionId = {
    // EN3
    // MA2C
};

// how many monsters, avg time, etc...
const questsData = {
    // get from quests wiki pages
};

// TODO:
// add for questsBySectionId, questsData
const recommendedQuests = ({ area, sectionId }: IRecommendedQuests) => questsByArea[area];

interface IRecommendedQuests {
    area: string;
    sectionId: string;
}

type QuestByArea = {
    [key: string]: [
        {
            shortName: string;
            name: string;
            menuPath: string;
            link: string;
        }
    ]
}

export default recommendedQuests;
