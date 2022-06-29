import Jimp from 'jimp';
import robot from 'robotjs';

export const printScreen = async (): Promise<string | void> => {
  try {
    const { x, y } = robot.getMousePos();
    const img = robot.screen.capture(x, y, 200, 200);
    const image = new Jimp(img.width, img.height);

    let pos = 0;

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
      image.bitmap.data[idx + 2] = img.image.readUInt8(pos++);
      image.bitmap.data[idx + 1] = img.image.readUInt8(pos++);
      image.bitmap.data[idx + 0] = img.image.readUInt8(pos++);
      image.bitmap.data[idx + 3] = img.image.readUInt8(pos++);
    });

    const bmpImage = await image.getBase64Async(Jimp.MIME_PNG);
    const result = bmpImage.replace('data:image/png;base64,', '');

    return result;
  } catch (error) {
    console.log(`Operation failed: ${error}`);
  }
};
