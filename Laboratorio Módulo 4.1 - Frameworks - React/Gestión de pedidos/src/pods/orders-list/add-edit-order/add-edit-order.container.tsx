import { FC, useContext, useEffect, useState } from "react";
import { AddEditOrderComponent } from "./add-edit-order.component";
import { Order } from "@/core/model";
import { OrdersContext } from "@/core/context/orders-context";
import { generateOrderNumber } from "@/core/utils/order-number";

export const AddEditOrderContainer: FC = () => {
  const { orders, setOrders, selectedOrderToEdit } = useContext(OrdersContext);

  const [order, setOrder] = useState<Order>({
    status: "Pending",
    orderNumber: "",
    supplier: "",
    date: new Date(),
    totalAmount: 0,
    items: [],
  });

  const addEdit = () => {
    const updatedOrder = [...orders, order];
    setOrders(updatedOrder);

    setOrder({
      status: "Pending",
      orderNumber: "",
      supplier: "",
      date: new Date(),
      totalAmount: 0,
      items: [],
    });
  };

  useEffect(() => {
    if (selectedOrderToEdit) {
      const selectedOrder = {
        status: selectedOrderToEdit.status,
        orderNumber: selectedOrderToEdit.orderNumber,
        supplier: selectedOrderToEdit.supplier,
        date: selectedOrderToEdit.date,
        totalAmount: selectedOrderToEdit.totalAmount,
        items: selectedOrderToEdit.items,
      };
      setOrder(selectedOrder);
    }
    setOrder((prev) => ({
      ...prev,
      orderNumber: generateOrderNumber(orders),
    }));
  }, [orders, selectedOrderToEdit]);

  return (
    <AddEditOrderComponent
      order={order}
      setOrder={setOrder}
      addEdit={addEdit}
    />
  );
};
