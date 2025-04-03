import { FC, useContext, useEffect, useState } from "react";
import { OrderDetailHeaderComponent } from "./order-detail-header.component";
import { useParams } from "react-router-dom";
import { OrdersContext } from "@/core/context/orders-context";

export const OrderDetailHeaderContainer: FC = () => {
  const { orders, selectedOrder, setSelectedOrder } = useContext(OrdersContext);
  const [statusPercentage, setStatusPercentage] = useState<number>(0);
  const { id } = useParams();

  useEffect(() => {
    const order = orders.find((order) => order.orderNumber === id);
    if (order) setSelectedOrder(order);
  }, [id, orders, setSelectedOrder]);

  useEffect(() => {
    const items = selectedOrder?.items ?? [];
    const validatedItems = items.filter((item) => item.status).length;
    const percentage = (validatedItems / items.length) * 100;
    setStatusPercentage(isNaN(percentage) ? 0 : percentage);
  }, [selectedOrder?.items]);

  return (
    <OrderDetailHeaderComponent
      selectedOrder={selectedOrder}
      statusPercentage={statusPercentage}
    />
  );
};
