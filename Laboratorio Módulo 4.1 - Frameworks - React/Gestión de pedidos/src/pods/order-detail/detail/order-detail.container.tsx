import { FC, useContext } from "react";
import { OrderDetailComponent } from "./order-detail.component";
import { OrdersContext } from "@/core/context/orders-context";
import { Item } from "@/core/model";

export type Action = "validate" | "invalidate";

export const OrderDetailContainer: FC = () => {
  const { selectedOrder, setSelectedOrder, updateOrder } =
    useContext(OrdersContext);

  const items = selectedOrder?.items ?? [];

  const handleCheckbox = (id: string) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );

    if (selectedOrder) {
      const updatedOrder = {
        ...selectedOrder,
        items: updatedItems,
      };

      updateOrder(updatedOrder);
      setSelectedOrder(updatedOrder);
    }
  };

  const updateItemByAction = (item: Item, action: Action): Item => {
    if (item.isChecked) {
      if (action === "validate" && !item.status) {
        return { ...item, status: true, isChecked: false };
      }
      if (action === "invalidate" && item.status) {
        return { ...item, status: false, isChecked: false };
      }
      return { ...item, isChecked: false };
    }
    return item;
  };

  const validateInvalidate = (action: Action) => {
    const updatedItems = items.map((item) => updateItemByAction(item, action));

    if (selectedOrder) {
      const updatedOrder = {
        ...selectedOrder,
        items: updatedItems,
      };

      updateOrder(updatedOrder);
      setSelectedOrder(updatedOrder);
    }
  };

  return (
    <OrderDetailComponent
      items={items}
      handleCheckbox={handleCheckbox}
      validateInvalidate={validateInvalidate}
    />
  );
};
