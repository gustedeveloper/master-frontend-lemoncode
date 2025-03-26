import { PictureInfo } from "../../core/model";
import { cityPictures } from "../../core/data";

export const getPictures = (): Promise<PictureInfo[]> => {
  return new Promise((resolve) => {
    resolve(cityPictures);
  });
};
