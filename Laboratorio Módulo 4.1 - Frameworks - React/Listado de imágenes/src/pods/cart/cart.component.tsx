import { FC } from "react";
import { CartContainer } from "./cart.container";

interface Props {
  selectedPictures: string[];
}

export const CartComponent: FC<Props> = (props) => {
  const { selectedPictures } = props;

  return (
    <>
      <div className="cart">
        <h1>Shopping Cart</h1>
        {selectedPictures.map((picture) => (
          <p key={picture}>{picture}</p>
        ))}
      </div>
    </>
  );
};
