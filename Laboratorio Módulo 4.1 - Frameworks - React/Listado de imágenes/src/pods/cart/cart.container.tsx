import { FC, useContext, useEffect, useState } from "react";
import { PicturesContext } from "../../core/context/pictures-context";
import { CartComponent } from "./cart.component";
import { getAllPictures } from "./cart.api";
import { PictureInfo } from "../../core/model";

export const CartContainer: FC = () => {
  const {
    selectedPictures,
    setSelectedPictures,
    totalCartBalance,
    setTotalCartBalance,
  } = useContext(PicturesContext);
  const [cartPictures, setCartPictures] = useState<PictureInfo[]>([]);

  useEffect(() => {
    getAllPictures().then((apiPictures) => {
      setCartPictures(
        apiPictures.filter((picture) => selectedPictures.includes(picture.id))
      );
    });
    getTotalCartBalance();
  }, [selectedPictures, cartPictures]);

  const deleteFromCart = (id: string) => {
    const updateWithDeletedPicture = selectedPictures.filter(
      (picture) => picture !== id
    );

    setSelectedPictures(updateWithDeletedPicture);
  };

  const removeAll = () => {
    const empty: string[] = [];
    setSelectedPictures(empty);
  };

  const getTotalCartBalance = () => {
    const totalBalance = cartPictures.reduce(
      (total, picture) => total + picture.price,
      0
    );

    const decimals = totalBalance.toFixed(2);

    setTotalCartBalance(Number(decimals));
  };

  return (
    <CartComponent
      cartPictures={cartPictures}
      deleteFromCart={deleteFromCart}
      removeAll={removeAll}
      totalCartBalance={totalCartBalance}
    />
  );
};
