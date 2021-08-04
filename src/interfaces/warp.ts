export interface IWarpEpisode {
    area: number;
    solo?: boolean;
};

export interface IGenerateWarp extends IWarpEpisode {
    // extends doesn't work? or am i doing something wrong here...
    area: number;
    solo?: boolean;
    // ^ it should be getting it from IWarpEpisode
    episode: number;
};