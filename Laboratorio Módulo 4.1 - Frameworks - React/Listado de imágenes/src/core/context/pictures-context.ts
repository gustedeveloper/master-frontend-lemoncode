import React from "react";

interface ContextModel {
  selectedPictures: string[];
  setSelectedPictures: (pictures: string[]) => void;
}

export const PicturesContext = React.createContext<ContextModel>({
  selectedPictures: [],
  setSelectedPictures: () => {},
});
