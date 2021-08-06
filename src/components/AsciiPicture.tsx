import React from 'react';

// create thumbnail with images, change to ascii (text) on hover
// https://blog.filestack.com/tutorials/ascii-art-react/
const AsciiPicture = ({ src, alt = '' }: IAsciiPicture): JSX.Element => {
    return (
        <img src={src} alt={alt} />
    );
};

export interface IAsciiPicture {
    src: string;
    alt?: string;
}

export default AsciiPicture;
