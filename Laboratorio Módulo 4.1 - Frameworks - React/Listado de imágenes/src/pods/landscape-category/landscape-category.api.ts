import { PictureInfo } from "../../core/model";
import { landscapePictures } from "../../core/data";

export const getPictures = (): Promise<PictureInfo[]> => {
  return new Promise((resolve) => {
    resolve(landscapePictures);
  });
};
