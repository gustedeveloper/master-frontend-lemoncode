import { FC } from "react";
import { CityCategoryContainer } from "../pods/city-category";
import { CartContainer } from "../pods/cart";

export const CityCategoryPage: FC = () => {
  return (
    <>
      <CityCategoryContainer />
      <CartContainer />
    </>
  );
};
