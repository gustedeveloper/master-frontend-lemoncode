import React from "react";
import { Order } from "../model";

interface ContextModel {
  orders: Order[];
  setOrders: (orders: Order[]) => void;
  selectedOrder?: Order;
  setSelectedOrder: (selectedOrder: Order) => void;
  updateOrder: (updatedOrder: Order) => void;
  selectedOrderToEdit?: Order;
  setSelectedOrderToEdit: (order: Order) => void;
}

export const OrdersContext = React.createContext<ContextModel>({
  orders: [],
  setOrders: () => {},
  selectedOrder: undefined,
  setSelectedOrder: () => {},
  updateOrder: () => {},
  selectedOrderToEdit: undefined,
  setSelectedOrderToEdit: () => {},
});
