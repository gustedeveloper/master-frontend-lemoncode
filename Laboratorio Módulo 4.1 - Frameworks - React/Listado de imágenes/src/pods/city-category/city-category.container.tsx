import { FC, useContext, useEffect, useState } from "react";
import { CityCategoryComponent } from "./city-category.component";
import { getPictures } from "./city-category.api";
import { mapPictureCollectionFromApiToVm, PictureInfoVm } from "./city.vm";
import { PicturesContext } from "../../core/context/pictures-context";

export const CityCategoryContainer: FC = () => {
  const [pictures, setPictures] = useState<PictureInfoVm[]>([]);

  const { selectedPictures } = useContext(PicturesContext);

  useEffect(() => {
    getPictures().then((apiPictures) => {
      const mappedPictures = mapPictureCollectionFromApiToVm(apiPictures);
      setPictures(mappedPictures);
    });
  }, []);

  return <CityCategoryComponent pictures={pictures} />;
};
