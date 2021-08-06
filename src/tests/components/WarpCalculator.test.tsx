import React from 'react';
import { render } from '@testing-library/react';
import WarpCalculator from '../../components/WarpCalculator';
import { IGenerateWarp } from '../../interfaces/warp';

const warpCalculatorProps: IGenerateWarp = {
    episode: 1, 
    area: 2,
    solo: false,
};

it('renders WarpCalculator', () => {
  render(<WarpCalculator {...warpCalculatorProps} />);
});
