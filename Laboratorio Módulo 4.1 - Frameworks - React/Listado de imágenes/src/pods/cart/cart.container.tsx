import { FC, useContext } from "react";
import { PicturesContext } from "../../core/context/pictures-context";

export const CartContainer: FC = () => {
  const { selectedPictures } = useContext(PicturesContext);
  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {selectedPictures.map((picture) => (
        <p>{picture}</p>
      ))}
    </div>
  );
};
