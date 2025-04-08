import { FC, useContext, useEffect, useState } from "react";
import { AddEditOrderComponent } from "./add-edit-order.component";
import { Order } from "@/core/model";
import { OrdersContext } from "@/core/context/orders-context";
import { generateOrderNumber } from "@/core/utils/order-number";

export const AddEditOrderContainer: FC = () => {
  const { orders, setOrders, selectedOrderToEdit, setSelectedOrderToEdit } =
    useContext(OrdersContext);

  const [order, setOrder] = useState<Order>({
    status: "Pending",
    orderNumber: "",
    supplier: "",
    date: new Date(),
    totalAmount: 0,
    items: [],
  });

  const addEdit = () => {
    if (selectedOrderToEdit) {
      const updatedOrders = orders.map((o) =>
        o.orderNumber === selectedOrderToEdit.orderNumber ? order : o
      );
      setOrders(updatedOrders);
    } else {
      const updatedOrders = [...orders, order];
      setOrders(updatedOrders);
    }
    setOrder({
      status: "Pending",
      orderNumber: "",
      supplier: "",
      date: new Date(),
      totalAmount: 0,
      items: [],
    });
    setSelectedOrderToEdit(undefined);
  };

  useEffect(() => {
    if (selectedOrderToEdit) {
      setOrder(selectedOrderToEdit);
    } else {
      setOrder((prev) => ({
        ...prev,
        orderNumber: generateOrderNumber(orders),
        date: new Date(),
      }));
    }
  }, [orders, selectedOrderToEdit]);

  return (
    <AddEditOrderComponent
      order={order}
      setOrder={setOrder}
      addEdit={addEdit}
      selectedOrderToEdit={selectedOrderToEdit}
    />
  );
};
