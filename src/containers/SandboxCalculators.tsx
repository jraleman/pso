import React from 'react';
import WarpCalculator from '../components/WarpCalculator';
import LootCalculator from '../components/LootCalculator';

// get from a From type reducer
const warpCalculatorProps = {
    episode: 1, 
    area: 2,
    solo: false,
};

const lootCalculatorProps = {
    weaponId: '',
    grind: '',
    special: '',
    percentages: {
        native: '',
        aBeast: '',
        machine: '',
        dark: '',
        hit: '',
    },
    armorId: '',
    slots: '',
    def: '',
    evp: '',
    itemId: '',
    amount: '',
    unitId: '',
    suffix: '',
    value: '',
    level: '',
    mesetas: 0,
};

const SandboxCalculator = (): JSX.Element => {
    const { episode, area, solo } = warpCalculatorProps;

    return (
        <>
            <hr />
            <div>SandboxCalculator</div>
            <WarpCalculator episode={episode} area={area} solo={solo} />
            <LootCalculator {...lootCalculatorProps} />
            <hr />
        </>
    );
};

export default SandboxCalculator;
