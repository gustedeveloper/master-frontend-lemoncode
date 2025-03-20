import { FC, useContext, useEffect } from "react";
import { LandscapeCategoryComponent } from "./landscape-category.component";
import { getPictures } from "./landscape-category.api";
import { mapPictureCollectionFromApiToVm, PictureInfoVm } from "./landscape.vm";
import { PicturesContext } from "../../core/context/pictures-context";

export const LandscapeCategoryContainer: FC = () => {
  const { pictures, setPictures, selectedPictures, setSelectedPictures } =
    useContext(PicturesContext);

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
      addDeleteFromCart(selection, id);
    }
  };

  const addDeleteFromCart = (selection: PictureInfoVm, id: string) => {
    const updateWithDeletedPicture = selectedPictures.filter(
      (picture) => picture !== selection.id
    );

    if (selection.selected === true)
      setSelectedPictures([...selectedPictures, id]);
    else {
      setSelectedPictures(updateWithDeletedPicture);
    }
  };

  useEffect(() => {
    getPictures().then((apiPictures) => {
      const mappedPictures = mapPictureCollectionFromApiToVm(
        apiPictures,
        selectedPictures
      );
      setPictures(mappedPictures);
    });
  }, [selectedPictures]);

  return (
    <LandscapeCategoryComponent
      pictures={pictures}
      handleCheckBox={handleCheckBox}
    />
  );
};
