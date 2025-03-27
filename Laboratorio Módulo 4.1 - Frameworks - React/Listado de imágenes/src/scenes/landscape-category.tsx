import { FC } from "react";
import { LandscapeCategoryContainer } from "../pods/landscape-category";
import { AppLayout } from "../layout";
import { CartInsideDrawer } from "../pods/cart/cart-drawer";

export const LandscapeCategoryPage: FC = () => {
  return (
    <>
      <AppLayout>
        <LandscapeCategoryContainer />
        <CartInsideDrawer />
      </AppLayout>
    </>
  );
};
