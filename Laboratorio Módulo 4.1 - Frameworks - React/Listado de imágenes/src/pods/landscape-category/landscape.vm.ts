import * as api from "../../core/model";

export interface PictureInfoVm {
  id: string;
  picUrl: string;
  title: string;
  selected: boolean;
}

export const mapPictureFromApiToVm = (
  picture: api.PictureInfo
): PictureInfoVm => ({
  id: picture.id,
  picUrl: picture.picUrl,
  title: picture.title,
  selected: false,
});

export const mapPictureCollectionFromApiToVm = (
  pictureCollection: api.PictureInfo[]
): PictureInfoVm[] =>
  pictureCollection.map((picture) => mapPictureFromApiToVm(picture));
