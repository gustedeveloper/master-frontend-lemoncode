import { PropsWithChildren, useState } from "react";
import { Order } from "../model";
import { OrdersContext } from "./orders-context";

export const OrdersProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order>();

  return (
    <OrdersContext.Provider
      value={{ orders, setOrders, selectedOrder, setSelectedOrder }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
