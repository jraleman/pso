import { WarpData } from '../types/warp';
import { IGenerateWarp, IWarpEpisode } from '../interfaces/warp';
import { warpData } from '../data/warp';

const generateWarp = ({ episode, area, solo = true }: IGenerateWarp): string => {
    const codes: WarpData = warpData[episode];
    const warpValue: string = codes[area];
    const command: string = solo ? '/warpme' : `/warpall`;

    return warpValue ? `${command} ${warpValue}` : 'Wrong episode/area code';
};

export const warpEpisode1 = ({ area, solo }: IWarpEpisode): string =>
    generateWarp({ episode: 1, area, solo });

export const warpEpisode2 = ({ area, solo }: IWarpEpisode): string => 
    generateWarp({ episode: 2, area, solo });

export const warpEpisode4 = ({ area, solo }: IWarpEpisode): string => 
    generateWarp({ episode: 4, area, solo });

export default generateWarp;
