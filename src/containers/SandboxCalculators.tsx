import React from 'react';
import WarpCalculator from '../components/WarpCalculator';
import LootCalculator from '../components/LootCalculator';

// get from a From type reducer
const warpCalculatorProps = {
    episode: 1, 
    area: 2,
    solo: false,
};

const SandboxCalculator = (): JSX.Element => {
    const { episode, area, solo } = warpCalculatorProps;
    return (
        <>
            <div>SandboxCalculator</div>
            <WarpCalculator episode={episode} area={area} solo={solo} />
            <LootCalculator />
        </>
    );
};

export default SandboxCalculator;
