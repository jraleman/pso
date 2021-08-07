import React, { useState } from 'react';
import styled from 'styled-components';
import imageToAscii from '../utils/imageToAscii';

const uniqueId = require("lodash.uniqueid");

const PrintAsciiLines = ({ lines = [''] }) => (
    <>
        {lines?.map((line: string) => 
            line && (<ImageLine key={uniqueId()}>{line}</ImageLine>)
        )}
    </>
);

const AsciiPicture = ({ src, alt = '' }: IAsciiPicture): JSX.Element => {
    const [asciiOutput, setAsciiOutput] = useState<string | null>('');

    const onClick = async () => {
        const ascii = await imageToAscii({ src: src.toString() });
        setAsciiOutput(ascii);
    };

    const lines = asciiOutput?.split('\n');
    console.log('asciiOutput', asciiOutput);
    return (
        <ImageFrame>
            {/* change state to onHover on div */}
            <img src={src} alt={alt} />
            <button onClick={onClick}>Ascii</button>
            <PrintAsciiLines lines={lines} />
        </ImageFrame>
    );
};

const ImageFrame = styled.div`
    font-size: 6px;
    text-align: center;
`;

const ImageLine = styled.code`
    display: block;
    max-width: 101ch;
    white-space: pre;
`;

export interface IAsciiPicture {
    src: string;
    alt?: string;
}

export default AsciiPicture;
