import React from 'react';
import AsciiPicture from '../components/AsciiPicture';
import alRappy from '../assets/rappies/al-rappy.png';

// create thumbnail with images, change to ascii (text) on hover
// take a look at meme/ repository to implement gallery
const AsciiGallery = (): JSX.Element => {
    const imgSrc = alRappy;
    return (
        <>
            <div>AsciiGallery</div>
            <AsciiPicture src={imgSrc} />
        </>
    );
};

export default AsciiGallery;
