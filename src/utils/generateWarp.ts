const warpData: WarpData = {
    1: {
        0: 'Pioneer 2',
        1: 'Forest 1',
        2: 'Forest 2',
        3: 'Caves 1',
        4: 'Caves 2',
        5: 'Caves 3',
        6: 'Mines 1',
        7: 'Mines 2',
        8: 'Ruins 1',
        9: 'Ruins 2',
        10: 'Ruins 3',
        11: 'Dragon',
        12: 'De Rol Le',
        13: 'Vol Opt',
        14: 'Falz',
        15: 'ID Lobby',
        16: 'Battle Spaceship',
        17: 'Battle Palace (aka Temple)',
    },
    2: {
        0: 'Lab',
        1: 'VR Temple α',
        2: 'VR Temple β',
        3: 'VR Spaceship α',
        4: 'VR Spaceship β',
        5: 'Central Control Area',
        6: 'Jungle North',
        7: 'Jungle East',
        8: 'Mountain',
        9: 'Seaside Day',
        10: 'Seabed Upper',
        11: 'Seabed Lower',
        12: 'Gal Gryphon',
        13: 'Olga Flow',
        14: 'Barba Ray',
        15: 'Gol Dragon',
        16: 'Seaside Night',
        17: 'Tower',
    },
    // 3: skipped (third episode is from another game)
    4: {
        0: 'Pioneer 2',
        1: 'Crater (Eastern Route)',
        2: 'Crater (Western Route)',
        3: 'Crater (Southern Route)',
        4: 'Crater (Northern Route)',
        5: 'Crater Interior',
        6: 'Desert 1',
        7: 'Desert 2',
        8: 'Desert 3',
        9: 'Saint Million / Shambertin',
        10: 'Test Map (Caves 2)',
    },
};

const generateWarp = ({ episode, area, solo = true }: IGenerateWarp): string => {
    const command = solo ? '/warpme' : `/warpall`;
    const warpValue = warpData[episode].filter((value: string) => value === area);

    return warpValue ? `${command} ${warpValue}` : 'Wrong episode/area code';
};

export const warpEpisode1 = ({ area, solo }: IWarpEpisode): string =>
    generateWarp({ episode: 1, area, solo });

export const warpEpisode2 = ({ area, solo }: IWarpEpisode): string => 
    generateWarp({ episode: 2, area, solo });

export const warpEpisode4 = ({ area, solo }: IWarpEpisode): string => 
    generateWarp({ episode: 4, area, solo });

type WarpData = {
    [key: number]: {
        [key: number]: string;
    }
};

interface IWarpEpisode {
    area: string;
    solo?: boolean;
};

interface IGenerateWarp extends IWarpEpisode {
    episode: number;
};

export default generateWarp;
