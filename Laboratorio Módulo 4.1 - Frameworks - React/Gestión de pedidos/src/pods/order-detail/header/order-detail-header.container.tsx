import { FC, useContext, useEffect } from "react";
import { OrderDetailHeaderComponent } from "./order-detail-header.component";
import { useParams } from "react-router-dom";
import { OrdersContext } from "@/core/context/orders-context";

export const OrderDetailHeaderContainer: FC = () => {
  const { orders, selectedOrder, setSelectedOrder } = useContext(OrdersContext);
  const { id } = useParams();

  useEffect(() => {
    const order = orders.find((order) => order.orderNumber === id);
    if (order) setSelectedOrder(order);
  }, [id, orders, setSelectedOrder]);

  return <OrderDetailHeaderComponent selectedOrder={selectedOrder} />;
};
