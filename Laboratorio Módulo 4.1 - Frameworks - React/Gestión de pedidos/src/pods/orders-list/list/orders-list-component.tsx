import { FC } from "react";
import { OrdersListHeader } from "../header/orders-list-header.component";
import { Order } from "@/core/model";

interface Props {
  orders: Order[];
}

export const OrdersListComponent: FC<Props> = (props) => {
  const { orders } = props;

  return (
    <>
      <OrdersListHeader />
      {orders.map((order) => (
        <div key={order.orderNumber}>
          <span>{order.status}</span>
          <span>{order.orderNumber}</span>
          <span>{order.supplier}</span>
          <span>{order.date.toDateString()}</span>
          <span>{order.totalAmount} €</span>
        </div>
      ))}
    </>
  );
};
