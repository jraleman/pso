import React, { useState, useEffect } from 'react';
import { warpEpisode1 } from '../utils/generateWarp';
import { IGenerateWarp } from '../interfaces/warp';

const WarpCalculator = ({ episode, area, solo }: IGenerateWarp): JSX.Element | null => {
    const [output, setOutput] = useState<string | null>(null);

    useEffect(() => {
        let o: string = '';
        if (episode === 1) {
            o = warpEpisode1({ area, solo });
        }
        setOutput(o);
    }, [episode, area, solo, setOutput]);

    if (!output) {
        return null;
    }
    return (
        <code>{output}</code>
    );
};

export default WarpCalculator;
