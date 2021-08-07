import React, { useState } from 'react';
import styled from 'styled-components';
import imageToAscii from '../utils/imageToAscii';

const AsciiPicture = ({ src, alt = '' }: IAsciiPicture): JSX.Element => {
    const [asciiOutput, setAsciiOutput] = useState<string | null>('');

    const onClick = async () => {
        const ascii = await imageToAscii({ src: src.toString() });
        console.log('ascii', ascii);
        setAsciiOutput(ascii);
    };

    return (
        <>
            <img src={src} alt={alt} />
            <button onClick={onClick}>Ascii</button>
            <ImageFrame>{asciiOutput}</ImageFrame>
        </>
    );
};

const ImageFrame = styled.div`
    font-size: 1px;
    word-wrap: break-word;
`;

export interface IAsciiPicture {
    src: string;
    alt?: string;
}

export default AsciiPicture;
