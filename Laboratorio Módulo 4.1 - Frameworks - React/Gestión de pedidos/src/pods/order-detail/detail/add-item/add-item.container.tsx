import { FC, useContext, useEffect, useState } from "react";
import { AddItemComponent } from "./add-item.component";
import { OrdersContext } from "@/core/context/orders-context";
import { Item } from "@/core/model";
import { generateItemId } from "@/core/utils/item-id";

export const AddItemContainer: FC = () => {
  const { orders, selectedOrder, setSelectedOrder, updateOrder } =
    useContext(OrdersContext);
  const [showNewItemForm, setShowNewItemForm] = useState(false);
  const [item, setItem] = useState<Item>({
    id: "",
    isChecked: false,
    status: false,
    description: "",
    amount: 0,
  });

  const items = selectedOrder?.items ?? [];

  const addItem = () => {
    const updatedItems = [...items, item];

    if (selectedOrder) {
      const newTotalAmount = updatedItems.reduce(
        (acc, curr) => acc + curr.amount,
        0
      );

      const updatedOrder = {
        ...selectedOrder,
        items: updatedItems,
        totalAmount: Number(newTotalAmount.toFixed(2)),
      };
      updateOrder(updatedOrder);
      setSelectedOrder(updatedOrder);

      setItem({
        id: "",
        isChecked: false,
        status: false,
        description: "",
        amount: 0,
      });
    }
  };

  useEffect(() => {
    if (selectedOrder)
      setItem((prev) => ({
        ...prev,
        id: generateItemId(selectedOrder?.items, orders.indexOf(selectedOrder)),
      }));
  }, [orders, setItem, selectedOrder]);

  return (
    <AddItemComponent
      showNewItemForm={showNewItemForm}
      setShowNewItemForm={setShowNewItemForm}
      item={item}
      setItem={setItem}
      addItem={addItem}
    />
  );
};
