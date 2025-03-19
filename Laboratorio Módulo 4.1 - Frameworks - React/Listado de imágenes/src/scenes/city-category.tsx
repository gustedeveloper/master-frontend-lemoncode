import { FC } from "react";
import { CityCategoryContainer } from "../pods/city-category";
import { CartContainer } from "../pods/cart";
import { AppLayout } from "../layout";

export const CityCategoryPage: FC = () => {
  return (
    <>
      <AppLayout>
        <CityCategoryContainer />
        <CartContainer />
      </AppLayout>
    </>
  );
};
