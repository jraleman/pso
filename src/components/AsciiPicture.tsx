import React, { useState } from 'react';
import styled from 'styled-components';
import imageToAscii from '../utils/imageToAscii';

const PrintAsciiLines = ({ lines = [''] }) => {
    const print = lines.map((line) => line && <ImageLine>{line}</ImageLine>)
    return <>{print}</>;
};

const AsciiPicture = ({ src, alt = '' }: IAsciiPicture): JSX.Element => {
    const [asciiOutput, setAsciiOutput] = useState<string | null>('');

    const onClick = async () => {
        const ascii = await imageToAscii({ src: src.toString() });
        console.log('ascii', ascii);
        setAsciiOutput(ascii);
    };

    const lines = asciiOutput?.split('\n');
    return (
        <ImageFrame>
            {/* change state to onHover on div */}
            <img src={src} alt={alt} />
            <button onClick={onClick}>Ascii</button>

            {/* See how to print line by line and respect whitespaces in line */}
            {/* <ImageFrame>{asciiOutput}</ImageFrame> */}
            {/* <ImageFrame>{asciiOutput?.split('\n').map((o) => <p>{`${o}\n`}</p>)}</ImageFrame> */}
            <PrintAsciiLines lines={lines} />
        </ImageFrame>
    );
};

const ImageFrame = styled.div`
    // font-size: 6px;
    text-align: center;
    // width: 32px;
    // height: 32px;
`;

const ImageLine = styled.code`
    display: block;
`;

export interface IAsciiPicture {
    src: string;
    alt?: string;
}

export default AsciiPicture;
