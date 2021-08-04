import React from 'react';
import WarpCalculator from '../components/WarpCalculator';
import LootCalculator from '../components/LootCalculator';

const SandboxCalculator = (): JSX.Element => {
    return (
        <>
            <div>SandboxCalculator</div>
            <WarpCalculator />
            <LootCalculator />
        </>
    );
};

export default SandboxCalculator;
