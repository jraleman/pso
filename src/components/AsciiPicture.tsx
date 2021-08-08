import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import imageToAscii from '../utils/imageToAscii';

const uniqueId = require("lodash.uniqueid");

const PrintAsciiLines = ({ lines = [''] }) => (
    <>
        {lines?.map((line: string) => 
            line && (<AsciiLine key={uniqueId()}>{line}</AsciiLine>)
        )}
    </>
);

const AsciiPicture = ({ src, alt = '', isAscii = false }: IAsciiPicture): JSX.Element => {
    const [asciiOutput, setAsciiOutput] = useState<string | null>('');
    const [showAscii, setShowAscii] = useState<boolean>(isAscii);

    useEffect(() => {
        const generateAsciiImage = async () => {
            const asciiImage = await imageToAscii({ src });
            setAsciiOutput(asciiImage);
        };
        generateAsciiImage();
    }, [src]);

    const onMouseDown = useCallback(() => {
        setShowAscii(true);
    }, []);

    const onMouseUp =  useCallback(() => {
        setShowAscii(false);
    }, []);

    const lines = asciiOutput?.split('\n');
    return (
        <ImageFrame
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onTouchStart={onMouseDown}
            onTouchEnd={onMouseUp}
        >
            {!showAscii && <Image src={src} alt={alt} />}
            {showAscii && <PrintAsciiLines lines={lines} />}
        </ImageFrame>
    );
};

const ImageFrame = styled.div`
    font-size: 6px;
    margin: 0 auto;
    border: #282c34;
    border-width: medium;
    border-style: solid;
    border-radius: 2em;
    height: 425px;
    width: 425px;
    margin-top: 2em;
    margin-bottom: 2em;
    margin-left: 2em;
    margin-right: 2em;
    cursor: pointer;
`;

const AsciiLine = styled.code`
    display: block;
    white-space: pre;
`;

const Image = styled.img`
    width: auto;
    height: 100%;
`;

export interface IAsciiPicture {
    src: string;
    alt?: string;
    isAscii?: boolean;
}

export default AsciiPicture;
