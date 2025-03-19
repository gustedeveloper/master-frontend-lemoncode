import { FC } from "react";
import { LandscapeCategoryContainer } from "../pods/landscape-category";
import { CartContainer } from "../pods/cart";

export const LandscapeCategoryPage: FC = () => {
  return (
    <>
      <LandscapeCategoryContainer />
      <CartContainer />
    </>
  );
};
