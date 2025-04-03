import { FC, useContext } from "react";
import { OrderDetailComponent } from "./order-detail.component";
import { OrdersContext } from "@/core/context/orders-context";
import { Item } from "@/core/model";
import { useDebouncedCallback } from "use-debounce";

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

  const debouncedUpdateTotal = useDebouncedCallback((updatedItems: Item[]) => {
    if (selectedOrder) {
      const newTotal = updatedItems.reduce(
        (total, item) => total + item.amount,
        0
      );
      const updatedOrder = {
        ...selectedOrder,
        items: updatedItems,
        totalAmount: Number(newTotal.toFixed(2)),
      };
      updateOrder(updatedOrder);
      setSelectedOrder(updatedOrder);
    }
  }, 700);

  const handleOnChange = (id: string, value: string) => {
    let newValue = parseFloat(value);

    if (isNaN(newValue)) newValue = 0;

    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, amount: newValue } : item
    );

    if (selectedOrder) {
      const updatedOrder = {
        ...selectedOrder,
        items: updatedItems,
      };
      updateOrder(updatedOrder);
      setSelectedOrder(updatedOrder);
    }
    debouncedUpdateTotal(updatedItems);
  };

  return (
    <OrderDetailComponent
      items={items}
      handleCheckbox={handleCheckbox}
      validateInvalidate={validateInvalidate}
      handleOnChange={handleOnChange}
    />
  );
};
