import { FC, useContext, useEffect, useState } from "react";
import { OrderDetailComponent } from "./order-detail.component";
import { OrdersContext } from "@/core/context/orders-context";
import { Item } from "@/core/model";

export const OrderDetailContainer: FC = () => {
  const { selectedOrder, setSelectedOrder, updateOrder } =
    useContext(OrdersContext);
  const [items, setItems] = useState<Item[]>([]);

  const handleCheckbox = (id: string) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );

    setItems(updatedItems);

    if (selectedOrder) {
      const updatedOrder = {
        ...selectedOrder,
        items: updatedItems,
      };

      updateOrder(updatedOrder);
      setSelectedOrder(updatedOrder);
    }
  };

  const validate = () => {
    const updatedItems = items.map((item) =>
      item.isChecked && !item.status ? { ...item, status: true } : item
    );

    setItems(updatedItems);

    if (selectedOrder) {
      const updatedOrder = {
        ...selectedOrder,
        items: updatedItems,
      };

      updateOrder(updatedOrder);
      setSelectedOrder(updatedOrder);
    }
  };

  useEffect(() => {
    if (selectedOrder) setItems(selectedOrder?.items);
  }, [selectedOrder]);

  return (
    <OrderDetailComponent
      items={items}
      handleCheckbox={handleCheckbox}
      validate={validate}
    />
  );
};
