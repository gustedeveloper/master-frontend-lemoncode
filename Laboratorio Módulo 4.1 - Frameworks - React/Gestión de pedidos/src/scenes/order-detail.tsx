import {
  OrderDetailContainer,
  OrderDetailHeaderContainer,
} from "@/pods/order-detail";
import { FC } from "react";

export const OrderDetailPage: FC = () => {
  return (
    <>
      <OrderDetailHeaderContainer />
      <OrderDetailContainer />
    </>
  );
};
