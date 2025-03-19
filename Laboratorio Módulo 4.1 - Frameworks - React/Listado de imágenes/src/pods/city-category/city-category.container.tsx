import { FC, useContext, useEffect, useState } from "react";
import { CityCategoryComponent } from "./city-category.component";
import { getPictures } from "./city-category.api";
import { mapPictureCollectionFromApiToVm, PictureInfoVm } from "./city.vm";
import { PicturesContext } from "../../core/context/pictures-context";

export const CityCategoryContainer: FC = () => {
  const [pictures, setPictures] = useState<PictureInfoVm[]>([]);

  const { selectedPictures, setSelectedPictures } = useContext(PicturesContext);

  const handleCheckBox = (id: string) => {
    const selection = pictures.find((picture) => picture.id === id);
    if (selection) {
      selection.selected = !selection.selected;
      const updatedPictures = pictures.map((picture) =>
        picture.id === selection.id
          ? {
              ...picture,
              selected: selection?.selected,
            }
          : picture
      );
      setPictures(updatedPictures);
    }
  };

  useEffect(() => {
    getPictures().then((apiPictures) => {
      const mappedPictures = mapPictureCollectionFromApiToVm(apiPictures);
      setPictures(mappedPictures);
    });
  }, []);

  return (
    <CityCategoryComponent
      pictures={pictures}
      handleCheckBox={handleCheckBox}
    />
  );
};
