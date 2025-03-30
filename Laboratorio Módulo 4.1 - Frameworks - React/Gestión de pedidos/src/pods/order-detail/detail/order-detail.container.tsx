import { FC, useContext } from "react";
import { OrderDetailComponent } from "./order-detail.component";
import { OrdersContext } from "@/core/context/orders-context";

export const OrderDetailContainer: FC = () => {
  const { selectedOrder } = useContext(OrdersContext);

  return <OrderDetailComponent selectedOrder={selectedOrder} />;
};
