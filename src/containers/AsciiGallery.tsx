import React from 'react';
import AsciiPicture from '../components/AsciiPicture';

// create thumbnail with images, change to ascii (text) on hover
// take a look at meme/ repository to implement gallery
const AsciiGallery = (): JSX.Element => {
    const imgSrc = '';
    return (
        <>
            <div>AsciiGallery</div>
            <AsciiPicture src={imgSrc} />
        </>
    );
};

export default AsciiGallery;
