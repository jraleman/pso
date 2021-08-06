import React, { useState, useEffect } from 'react';
import { ILootCalculator } from '../interfaces/loot';

const LootCalculator = (props: ILootCalculator): JSX.Element | null => {
    const [generatedCmd, setGeneratedCmd] = useState<string | null>(null);
    const {
        weaponId,
        grind,
        special,
        percentages,
        armorId,
        slots,
        def,
        evp,
        itemId,
        amount,
        unitId,
        suffix,
        value,
        level,
        mesetas,
    } = props;

    useEffect(() => {
        // implements switch/case to handle which item to generate

        // WEAPONS:
        // weaponId,
        // grind,
        // special,
        // percentages,

        // ARMOUR:
        // armorId,
        // slots,
        // def,
        // evp,

        // ITEM:
        // itemId,
        // amount,

        // UNITS:
        // unitId,
        // suffix,

        // TECHNIQUES:
        // value,
        // level,

        // CURRENCY:
        // mesetas,
        // TODO: PD generator (use itemGenerator)
        // TODO: PB generator (use PDgenerator)

        setGeneratedCmd('');
    }, []);

    return (
        <>
            <div>LootCalculator</div>
            <div>{generatedCmd}</div>
        </>
    );
};

export default LootCalculator;
