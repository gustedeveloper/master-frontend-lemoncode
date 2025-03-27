import { Typography } from "@mui/material";
import { FC } from "react";
import { CartContainer } from "../cart";

export const CheckoutComponent: FC = () => {
  return (
    <>
      <Typography>Checkout</Typography>
      <CartContainer />
    </>
  );
};
