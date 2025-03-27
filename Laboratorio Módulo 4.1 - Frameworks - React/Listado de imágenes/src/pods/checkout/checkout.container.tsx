import { FC, useContext } from "react";
import { CheckoutComponent } from "./checkout.component";
import { PicturesContext } from "../../core/context/pictures-context";

export const CheckoutContainer: FC = () => {
  const { totalCartBalance } = useContext(PicturesContext);

  return <CheckoutComponent totalCartBalance={totalCartBalance} />;
};
