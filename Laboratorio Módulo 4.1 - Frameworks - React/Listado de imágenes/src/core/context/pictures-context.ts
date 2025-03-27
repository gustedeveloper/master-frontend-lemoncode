import React from "react";
import { PictureInfoVm } from "../model";

interface ContextModel {
  pictures: PictureInfoVm[];
  setPictures: (pictures: PictureInfoVm[]) => void;
  selectedPictures: string[];
  setSelectedPictures: (pictures: string[]) => void;
  drawer: boolean;
  setDrawer: (value: boolean) => void;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
  totalCartBalance: number;
  setTotalCartBalance: (value: number) => void;
  removeAll: () => void;
}

export const PicturesContext = React.createContext<ContextModel>({
  pictures: [],
  setPictures: () => {},
  selectedPictures: [],
  setSelectedPictures: () => {},
  drawer: false,
  setDrawer: () => {},
  handleDrawerOpen: () => {},
  handleDrawerClose: () => {},
  totalCartBalance: 0,
  setTotalCartBalance: () => {},
  removeAll: () => {},
});
