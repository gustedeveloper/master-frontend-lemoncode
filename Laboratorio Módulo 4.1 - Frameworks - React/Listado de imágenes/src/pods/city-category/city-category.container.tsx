import { FC, useEffect, useState } from "react";
import { CityCategoryComponent } from "./city-category.component";
import { PictureInfo } from "../../core/model";
import { getPictures } from "./city-category.api";

export const CityCategoryContainer: FC = () => {
  const [pictures, setPictures] = useState<PictureInfo[]>([]);

  useEffect(() => {
    getPictures().then((apiPictures) => {
      setPictures(apiPictures);
    });
  }, []);

  return <CityCategoryComponent pictures={pictures} />;
};
