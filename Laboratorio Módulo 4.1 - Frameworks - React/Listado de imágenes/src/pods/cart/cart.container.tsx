import { FC, useContext } from "react";
import { PicturesContext } from "../../core/context/pictures-context";
import { CartComponent } from "./cart.component";

export const CartContainer: FC = () => {
  const { selectedPictures } = useContext(PicturesContext);

  return <CartComponent selectedPictures={selectedPictures} />;
};
