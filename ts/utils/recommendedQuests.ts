const questsByEpisode = {
    episode1: [
        'forest',
        'caves',
        'mines',
        'ruins'
    ],
    episode2: [
        'temple',
        'spaceship',
        'cca',
        'seabed'
    ],
    // episode3 is a card game, reason to be skipped
    episode4: [
        'crater',
        'desert'
    ],
};

const questsByArea = {
    forest: [
        { name: 'Tyrell\'s Ego', shortName: 'TE', menuPath: 'VR >', link: 'https://wiki' },
        { name: '???', shortName: 'RFR', menuPath: '??? >', link: 'https://guide' },
        { name: '???', shortName: 'MAE', menuPath: '??? >', link: 'https://guide' },
    ],
    caves: [
        { name: '???', shortName: 'MA1B', menuPath: '??? >', link: 'https://guide' }
    ],
    mines: [
        { name: '???', shortName: 'LSB', menuPath: '??? >', link: 'https://guide' },
        { name: '???', shortName: 'SU3', menuPath: '??? >', link: 'https://guide' },
        { name: '???', shortName: 'EN3', menuPath: '??? >', link: 'https://guide', note: 'if good sinow ID'}
    ],
    ruins: [
        { name: 'Dark Research', shortName: 'DR', menuPath: '??? >', link: 'https://guide' },
        { name: '???', shortName: 'EN4', menuPath: '??? >', link: 'https://guide' }
    ],
    temple: [
        { name: '???', shortName: 'CCC', menuPath: '??? >', link: 'https://guide' }
    ],
    spaceship: [
        { name: '???', shortName: 'SU6', menuPath: '??? >', link: 'https://guide' },
        { name: '???', shortName: 'LBA', menuPath: '??? >', link: 'https://guide' },
        { name: '???', shortName: 'GDVD', menuPath: '??? >', link: 'https://guide' }
    ],
    cca: [
        { name: '???', shortName: 'MA2A', menuPath: '??? >', link: 'https://guide' },
        { name: '???', shortName: 'MA2C', menuPath: '??? >', link: 'https://guide', note: 'if good ID' }
    ],
    seabed: [
        { name: '???', shortName: 'SU8', menuPath: '??? >', link: 'https://guide' },
        { name: '???', shortName: 'PW3', menuPath: '??? >', link: 'https://guide' }
    ],
    crater: [
        { name: '???', shortName: 'MA4', menuPath: '??? >', link: 'https://guide' },
        { name: '???', shortName: 'MAE', menuPath: '??? >', link: 'https://guide' }
    ],
    desert: [
        { name: '???', shortName: 'NMU3', menuPath: '??? >', link: 'https://guide' },
        { name: '???', shortName: 'SU12', menuPath: '??? >', link: 'https://guide' }
    ]
};

// list section ids drops, and recommendation using section id by area
const questsBySectionId = {

};

// how many monsters, avg time, etc...
const questsData = {

};

// TODO:
// add for questsBySectionId, questsData
const recommendedQuests = ({ key = 'mines', sectionId = 'oran' }) => questsByArea[key];

export default recommendedQuests;
