import { FC, useEffect, useState } from "react";
import { LandscapeCategoryComponent } from "./landscape-category.component";
import { PictureInfo } from "../../core/model";
import { getPictures } from "./landscape-category.api";

export const LandscapeCategoryContainer: FC = () => {
  const [pictures, setPictures] = useState<PictureInfo[]>([]);

  useEffect(() => {
    getPictures().then((apiPictures) => {
      setPictures(apiPictures);
    });
  }, []);

  return <LandscapeCategoryComponent pictures={pictures} />;
};
