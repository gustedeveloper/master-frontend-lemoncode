import { FC, useEffect, useState } from "react";
import { OrdersListComponent } from "./orders-list-component";
import { Order } from "@/core/model";
import { getOrders } from "./api";

export const OrdersListContainer: FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    getOrders().then((apiOrders) => setOrders(apiOrders));
  }, []);

  return <OrdersListComponent orders={orders} />;
};
