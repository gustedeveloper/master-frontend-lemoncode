import { PictureInfo } from "../model";
import React from "react";

interface ContextModel {
  selectedPictures: PictureInfo[];
  setSelectedPictures: React.Dispatch<React.SetStateAction<PictureInfo[]>>;
}

export const PicturesContext = React.createContext<ContextModel | null>(null);
