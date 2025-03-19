import { FC } from "react";
import { LandscapeCategoryContainer } from "../pods/landscape-category";
import { CartContainer } from "../pods/cart";
import { AppLayout } from "../layout";

export const LandscapeCategoryPage: FC = () => {
  return (
    <>
      <AppLayout>
        <LandscapeCategoryContainer />
        <CartContainer />
      </AppLayout>
    </>
  );
};
