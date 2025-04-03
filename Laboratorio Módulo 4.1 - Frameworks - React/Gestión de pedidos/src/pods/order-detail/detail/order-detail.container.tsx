import { FC, useContext } from "react";
import { OrderDetailComponent } from "./order-detail.component";
import { OrdersContext } from "@/core/context/orders-context";

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

  const validate = () => {
    const updatedItems = items.map((item) =>
      item.isChecked && !item.status ? { ...item, status: true } : item
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

  return (
    <OrderDetailComponent
      items={items}
      handleCheckbox={handleCheckbox}
      validate={validate}
    />
  );
};
