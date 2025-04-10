import { FC, useContext, useState } from "react";
import { OrderDetailComponent } from "./order-detail.component";
import { OrdersContext } from "@/core/context/orders-context";
import { Item } from "@/core/model";
import { useDebouncedCallback } from "use-debounce";

export type Action = "validate" | "invalidate";

export const OrderDetailContainer: FC = () => {
  const { selectedOrder, setSelectedOrder, updateOrder } =
    useContext(OrdersContext);

  const [editingItemId, setEditingItemId] = useState<string | undefined>(
    undefined
  );

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

  const handleOnChange = (
    id: string,
    value: string,
    field: "description" | "amount"
  ) => {
    const updatedItems = items.map((item) => {
      if (item.id !== id) return item;

      if (field === "description") {
        return { ...item, description: value };
      } else {
        const newValue = parseFloat(value);
        return { ...item, amount: isNaN(newValue) ? 0 : newValue };
      }
    });

    if (selectedOrder) {
      const updatedOrder = {
        ...selectedOrder,
        items: updatedItems,
      };

      updateOrder(updatedOrder);
      setSelectedOrder(updatedOrder);

      if (field === "amount") {
        debouncedUpdateTotal(updatedItems);
      }
    }
  };

  const deleteItem = (id: string) => {
    const updatedItems = items.filter((item) => item.id !== id);
    const newTotalAmount = updatedItems.reduce(
      (acc, curr) => acc + curr.amount,
      0
    );

    if (selectedOrder) {
      const updatedOrder = {
        ...selectedOrder,
        items: updatedItems,
        totalAmount: newTotalAmount,
      };
      updateOrder(updatedOrder);
      setSelectedOrder(updatedOrder);
    }
  };

  const editItemDescription = (id: string) => {
    setEditingItemId(id);
  };

  return (
    <OrderDetailComponent
      items={items}
      handleCheckbox={handleCheckbox}
      validateInvalidate={validateInvalidate}
      handleOnChange={handleOnChange}
      deleteElement={deleteItem}
      editingItemId={editingItemId}
      setEditingItemId={setEditingItemId}
      editItemDescription={editItemDescription}
    />
  );
};
