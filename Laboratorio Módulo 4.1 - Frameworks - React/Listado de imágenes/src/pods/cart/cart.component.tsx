import { FC } from "react";
import { PictureInfo } from "../../core/model";
import "../../index.css";

interface Props {
  allPictures: PictureInfo[];
}

export const CartComponent: FC<Props> = (props) => {
  const { allPictures } = props;

  return (
    <>
      <div className="cart">
        <h1>Shopping Cart</h1>
        {allPictures.map((picture, index) => (
          <>
            <div key={index} className="pic-container">
              <img className="cart-img" src={picture.picUrl} />
              <span>{picture.title}</span>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
