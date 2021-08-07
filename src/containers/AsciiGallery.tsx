import React from 'react';
import styled from 'styled-components';
import AsciiPicture from '../components/AsciiPicture';
import alRappy from '../assets/rappies/al-rappy.jpg';
import delRappy from '../assets/rappies/del-rappy.jpg';
import loveRappy from '../assets/rappies/love-rappy1.jpg';
import rappy from '../assets/rappies/rappy.jpg';

const rappies: Array<string> = [
    alRappy,
    delRappy,
    loveRappy,
    rappy,
];

// create thumbnail with images, change to ascii (text) on hover
// take a look at meme/ repository to implement gallery
const AsciiGallery = (): JSX.Element => {
    const title = 'Rappies! 🐣';
    const images = rappies;
    return (
        <GalleryContainer>
            <hr />
            <Title>{title}</Title>
            {images?.map((src) => <AsciiPicture src={src} />)}
            <hr />
        </GalleryContainer>
    );
};

const GalleryContainer = styled.div`
    display: inline-grid;
`;

const Title = styled.h3`
    text-align: center;
`;

export default AsciiGallery;
