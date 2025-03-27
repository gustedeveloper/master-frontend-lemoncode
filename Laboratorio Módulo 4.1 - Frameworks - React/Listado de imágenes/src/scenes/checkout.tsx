import { FC } from "react";
import { AppLayout } from "../layout";
import { CheckoutContainer } from "../pods/checkout";
import { CartContainer } from "../pods/cart";

export const CheckoutPage: FC = () => {
  return (
    <>
      <AppLayout>
        <CartContainer />
        <CheckoutContainer />
      </AppLayout>
    </>
  );
};
