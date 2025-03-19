import { FC, useEffect, useState } from "react";
import { LandscapeCategoryComponent } from "./landscape-category.component";
import { getPictures } from "./landscape-category.api";
import { mapPictureCollectionFromApiToVm, PictureInfoVm } from "./landscape.vm";

export const LandscapeCategoryContainer: FC = () => {
  const [pictures, setPictures] = useState<PictureInfoVm[]>([]);

  useEffect(() => {
    getPictures().then((apiPictures) => {
      const mappedPictures = mapPictureCollectionFromApiToVm(apiPictures);
      setPictures(mappedPictures);
    });
  }, []);

  return <LandscapeCategoryComponent pictures={pictures} />;
};
