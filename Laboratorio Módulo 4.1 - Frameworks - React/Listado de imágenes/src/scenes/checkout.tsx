import { FC } from "react";
import { AppLayout } from "../layout";
import { CheckoutContainer } from "../pods/checkout";

export const CheckoutPage: FC = () => {
  return (
    <>
      <AppLayout>
        <CheckoutContainer />
      </AppLayout>
    </>
  );
};
