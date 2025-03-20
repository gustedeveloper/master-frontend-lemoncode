import React from "react";
import { PictureInfoVm } from "../model";

interface ContextModel {
  pictures: PictureInfoVm[];
  setPictures: (pictures: PictureInfoVm[]) => void;
  selectedPictures: string[];
  setSelectedPictures: (pictures: string[]) => void;
}

export const PicturesContext = React.createContext<ContextModel>({
  pictures: [],
  setPictures: () => {},
  selectedPictures: [],
  setSelectedPictures: () => {},
});
