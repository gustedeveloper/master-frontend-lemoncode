import { FC, useContext, useEffect, useState } from "react";
import { OrderDetailComponent } from "./order-detail.component";
import { OrdersContext } from "@/core/context/orders-context";
import { Item } from "@/core/model";

export const OrderDetailContainer: FC = () => {
  const { selectedOrder } = useContext(OrdersContext);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    if (selectedOrder) setItems(selectedOrder?.items);
  }, [selectedOrder]);

  return <OrderDetailComponent items={items} />;
};
