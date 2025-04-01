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

    const percentage = getStatusPercentage();
    if (percentage) setStatusPercentage(percentage);
  }, [id, orders, setSelectedOrder, selectedOrder]);

  const getStatusPercentage = () => {
    const items = selectedOrder?.items;
    let validatedItems = 0;
    if (items) {
      items.forEach((item) => {
        if (item.status) validatedItems += 1;
      });

      return (validatedItems / items.length) * 100;
    }
  };

  return (
    <OrderDetailHeaderComponent
      selectedOrder={selectedOrder}
      statusPercentage={statusPercentage}
    />
  );
};
