import { FC } from "react";
import { CityCategoryContainer } from "../pods/city-category";
import { AppLayout } from "../layout";
import { CartInsideDrawer } from "../pods/cart/cart-drawer";

export const CityCategoryPage: FC = () => {
  return (
    <>
      <AppLayout>
        <CityCategoryContainer />
        <CartInsideDrawer />
      </AppLayout>
    </>
  );
};
