import React, { useState, useEffect } from 'react';
import generateWarp from '../utils/generateWarp';
import { IGenerateWarp } from '../interfaces/warp';

const WarpCalculator = ({ episode, area, solo }: IGenerateWarp): JSX.Element | null => {
    const [output, setOutput] = useState<string | null>(null);

    useEffect(() => {
        const o: string = generateWarp({ episode, area, solo });
        setOutput(o);
    }, [episode, area, solo, setOutput]);

    if (!output) {
        return null;
    }
    return (
        <code>{output}</code>
        // <code>{JSON.parse(output)}</code>
    );
};

export default WarpCalculator;
