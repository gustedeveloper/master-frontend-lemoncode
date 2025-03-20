import { PropsWithChildren, useState } from "react";
import { PicturesContext } from "./pictures-context";
import { PictureInfoVm } from "../model";

export const PicturesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [pictures, setPictures] = useState<PictureInfoVm[]>([]);
  const [selectedPictures, setSelectedPictures] = useState<string[]>([]);

  return (
    <PicturesContext.Provider
      value={{ pictures, setPictures, selectedPictures, setSelectedPictures }}
    >
      {children}
    </PicturesContext.Provider>
  );
};
