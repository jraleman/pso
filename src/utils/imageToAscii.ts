const getAsciiImage = require("get-ascii-image");

const imageToAscii = async ({ src }: IImageToAscii): Promise<AsciiImage> => {
    let asciiImage: AsciiImage = null;

    const config = {
        maxWidth: 400,
        maxHeight: 700,
        avoidedCharacters: ["#", "a", '$'],
      };
    try {
      asciiImage = await getAsciiImage(src, config);
    } catch (err) {
      console.log(err);
    }
    return asciiImage;
};

export interface IImageToAscii {
    src: string;
}

export type AsciiImage = string | null;

export default imageToAscii;
