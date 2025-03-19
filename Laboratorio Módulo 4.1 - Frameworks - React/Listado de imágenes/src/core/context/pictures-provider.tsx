import { PropsWithChildren, useState } from "react";
import { PicturesContext } from "./pictures-context";

export const PicturesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [selectedPictures, setSelectedPictures] = useState<string[]>([]);

  return (
    <PicturesContext.Provider value={{ selectedPictures, setSelectedPictures }}>
      {children}
    </PicturesContext.Provider>
  );
};
