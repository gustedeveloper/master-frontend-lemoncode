import { FC, useContext } from "react";
import { OrdersListComponent } from "./orders-list-component";
import { OrdersContext } from "@/core/context/orders-context";

export const OrdersListContainer: FC = () => {
  const { orders, setOrders } = useContext(OrdersContext);

  const deleteOrder = (orderNumber: string) => {
    const updatedOrders = orders.filter(
      (order) => order.orderNumber !== orderNumber
    );
    setOrders(updatedOrders);
  };

  return <OrdersListComponent orders={orders} deleteOrder={deleteOrder} />;
};
