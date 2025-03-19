import React from "react";

interface ContextModel {
  selectedPictures: string[];
  setSelectedPictures: React.Dispatch<React.SetStateAction<string[]>>;
}

export const PicturesContext = React.createContext<ContextModel>({
  selectedPictures: [],
  setSelectedPictures: () => {},
});
