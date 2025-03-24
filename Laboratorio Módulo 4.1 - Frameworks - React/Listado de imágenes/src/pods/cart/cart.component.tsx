import { FC } from "react";
import { PictureInfo } from "../../core/model";
import "../../index.css";

interface Props {
  allPictures: PictureInfo[];
  deleteFromCart: (id: string) => void;
}

export const CartComponent: FC<Props> = (props) => {
  const { allPictures, deleteFromCart } = props;

  return (
    <>
      <div className="cart">
        <h1>Shopping Cart</h1>
        <div className="img-container">
          {allPictures.map((picture) => (
            <div key={picture.id} className="pic-container">
              <img className="cart-img" src={picture.picUrl} />
              <span>{picture.title}</span>
              <button onClick={() => deleteFromCart(picture.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
