import { FC, useContext, useEffect } from "react";
import { OrdersListComponent } from "./orders-list-component";

import { getOrders } from "./api";
import { OrdersContext } from "@/core/context/orders-context";

export const OrdersListContainer: FC = () => {
  const { orders, setOrders } = useContext(OrdersContext);

  useEffect(() => {
    getOrders().then((apiOrders) => setOrders(apiOrders));
  }, [setOrders]);

  return <OrdersListComponent orders={orders} />;
};
