import React from 'react';
import { render } from '@testing-library/react';
import AsciiPicture, { IAsciiPicture } from '../../components/AsciiPicture';

const asciiPictureProps: IAsciiPicture = {
    src: '',
    alt: '',
};

it('renders AsciiPicture', () => {
  render(<AsciiPicture {...asciiPictureProps} />);
});
