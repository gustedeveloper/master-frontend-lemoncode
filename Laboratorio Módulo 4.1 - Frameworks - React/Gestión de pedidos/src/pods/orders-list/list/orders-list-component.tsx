import { FC } from "react";
import { OrdersListHeader } from "../header/orders-list-header.component";

export const OrdersListComponent: FC = () => {
  return (
    <>
      <OrdersListHeader />
      <h1>Orders list</h1>
    </>
  );
};
