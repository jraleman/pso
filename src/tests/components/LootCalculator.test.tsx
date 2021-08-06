import React from 'react';
import { render } from '@testing-library/react';
import LootCalculator from '../../components/LootCalculator';
import { ILootCalculator } from '../../interfaces/loot';

const lootCalculatorProps: ILootCalculator = {
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

it('renders LootCalculator', () => {
  render(<LootCalculator {...lootCalculatorProps} />);
});
