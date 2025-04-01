import { FC, useContext, useEffect, useState } from "react";
import { OrderDetailComponent } from "./order-detail.component";
import { OrdersContext } from "@/core/context/orders-context";
import { Item } from "@/core/model";

export const OrderDetailContainer: FC = () => {
  const { selectedOrder } = useContext(OrdersContext);
  const [items, setItems] = useState<Item[]>([]);

  const handleCheckbox = (id: string) => {
    const selection = items.find((item) => item.id === id);

    if (selection) {
      selection.isChecked = !selection.isChecked;
      const updatedItems = items.map((item) =>
        item.id === selection.id
          ? {
              ...item,
              isChecked: selection?.isChecked,
            }
          : item
      );
      setItems(updatedItems);
    }
  };

  useEffect(() => {
    if (selectedOrder) setItems(selectedOrder?.items);
  }, [selectedOrder]);

  return <OrderDetailComponent items={items} handleCheckbox={handleCheckbox} />;
};
