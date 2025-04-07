import { FC, useContext } from "react";
import { OrdersListComponent } from "./orders-list-component";
import { OrdersContext } from "@/core/context/orders-context";
import { Order } from "@/core/model";

export const OrdersListContainer: FC = () => {
  const { orders, setOrders, setSelectedOrderToEdit } =
    useContext(OrdersContext);

  const deleteOrder = (orderNumber: string) => {
    const updatedOrders = orders.filter(
      (order) => order.orderNumber !== orderNumber
    );
    setOrders(updatedOrders);
  };

  const getSelectedOrderToEdit = (order: Order): void => {
    setSelectedOrderToEdit(order);
    console.log(order);
  };

  return (
    <OrdersListComponent
      orders={orders}
      deleteOrder={deleteOrder}
      getSelectedOrderToEdit={getSelectedOrderToEdit}
    />
  );
};
