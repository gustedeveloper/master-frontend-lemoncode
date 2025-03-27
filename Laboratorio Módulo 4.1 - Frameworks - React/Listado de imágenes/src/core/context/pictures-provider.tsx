import { PropsWithChildren, useState } from "react";
import { PicturesContext } from "./pictures-context";
import { PictureInfoVm } from "../model";

export const PicturesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [pictures, setPictures] = useState<PictureInfoVm[]>([]);
  const [selectedPictures, setSelectedPictures] = useState<string[]>([]);
  const [drawer, setDrawer] = useState(false);
  const [totalCartBalance, setTotalCartBalance] = useState<number>(0);

  const handleDrawerOpen = () => {
    setDrawer(true);
  };

  const handleDrawerClose = () => {
    setDrawer(false);
  };

  const removeAll = () => {
    const empty: string[] = [];
    setSelectedPictures(empty);
  };

  return (
    <PicturesContext.Provider
      value={{
        pictures,
        setPictures,
        selectedPictures,
        setSelectedPictures,
        drawer,
        setDrawer,
        handleDrawerOpen,
        handleDrawerClose,
        totalCartBalance,
        setTotalCartBalance,
        removeAll,
      }}
    >
      {children}
    </PicturesContext.Provider>
  );
};
