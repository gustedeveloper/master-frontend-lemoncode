import * as api from "../../core/model";

export interface PictureInfoVm {
  id: string;
  picUrl: string;
  title: string;
  selected: boolean;
  price: number;
}

export const mapPictureFromApiToVm = (
  picture: api.PictureInfo,
  selectedPictures: string[]
): PictureInfoVm => ({
  id: picture.id,
  picUrl: picture.picUrl,
  title: picture.title,
  price: picture.price,
  selected: selectedPictures.includes(picture.id),
});

export const mapPictureCollectionFromApiToVm = (
  pictureCollection: api.PictureInfo[],
  selectedPictures: string[]
): PictureInfoVm[] =>
  pictureCollection.map((picture) =>
    mapPictureFromApiToVm(picture, selectedPictures)
  );
