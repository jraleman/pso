import imageToAscii, { AsciiImage } from "../../utils/imageToAscii";

const initialState = {
    src: '',
}

it("returns null ", async () => {
    const ascii: AsciiImage = await imageToAscii({ ...initialState });
    expect(ascii).toBe(null);
});
