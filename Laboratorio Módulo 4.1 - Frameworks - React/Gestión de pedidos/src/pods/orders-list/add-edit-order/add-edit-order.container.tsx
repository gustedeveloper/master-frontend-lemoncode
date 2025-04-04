import { FC, useContext, useEffect, useState } from "react";
import { AddEditOrderComponent } from "./add-edit-order.component";
import { Order } from "@/core/model";
import { OrdersContext } from "@/core/context/orders-context";
import { generateOrderNumber } from "@/core/utils/order-number";

export const AddEditOrderContainer: FC = () => {
  const { orders, setOrders } = useContext(OrdersContext);

  const [newOrder, setNewOrder] = useState<Order>({
    status: "Pending",
    orderNumber: "",
    supplier: "",
    date: new Date(),
    totalAmount: 0,
    items: [],
  });

  const addEdit = () => {
    const updatedOrder = [...orders, newOrder];
    setOrders(updatedOrder);
  };

  useEffect(() => {
    setNewOrder((prev) => ({
      ...prev,
      orderNumber: generateOrderNumber(orders),
    }));
  }, [orders]);

  return (
    <AddEditOrderComponent
      newOrder={newOrder}
      setNewOrder={setNewOrder}
      addEdit={addEdit}
    />
  );
};
