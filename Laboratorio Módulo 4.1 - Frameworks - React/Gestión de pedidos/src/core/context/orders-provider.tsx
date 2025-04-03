import { PropsWithChildren, useState } from "react";
import { Order } from "../model";
import { OrdersContext } from "./orders-context";

export const OrdersProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order>();

  const updateOrder = (updatedOrder: Order) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.orderNumber === updatedOrder.orderNumber ? updatedOrder : order
      )
    );
  };

  return (
    <OrdersContext.Provider
      value={{
        orders,
        setOrders,
        selectedOrder,
        setSelectedOrder,
        updateOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
