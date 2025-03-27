import { FC } from "react";
import { AppLayout } from "../layout";
import { CheckoutContainer } from "../pods/checkout";
import { CartContainer } from "../pods/cart";
import { CheckoutLayout } from "../layout/checkout.layout";

export const CheckoutPage: FC = () => {
  return (
    <>
      <AppLayout>
        <CheckoutLayout>
          <CartContainer />
          <CheckoutContainer />
        </CheckoutLayout>
      </AppLayout>
    </>
  );
};
