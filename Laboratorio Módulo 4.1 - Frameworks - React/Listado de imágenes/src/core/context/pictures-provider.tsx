import { PropsWithChildren, useState } from "react";
import { PicturesContext } from "./pictures-context";
import { PictureInfo } from "../model";

export const PicturesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [selectedPictures, setSelectedPictures] = useState<PictureInfo[]>([]);

  return (
    <PicturesContext.Provider value={{ selectedPictures, setSelectedPictures }}>
      {children}
    </PicturesContext.Provider>
  );
};
