import { PictureInfo } from "../../core/model";
import { landscapePictures, cityPictures } from "../../core/data";

export const getAllPictures = (): Promise<PictureInfo[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(landscapePictures.concat(cityPictures));
    }, 50);
  });
};
