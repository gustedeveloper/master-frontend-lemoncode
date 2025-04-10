import { FC, useContext, useEffect, useState } from "react";
import { OrderDetailHeaderComponent } from "./order-detail-header.component";
import { useParams } from "react-router-dom";
import { OrdersContext } from "@/core/context/orders-context";

export const OrderDetailHeaderContainer: FC = () => {
  const { orders, selectedOrder, setSelectedOrder, updateOrder } =
    useContext(OrdersContext);
  const [statusPercentage, setStatusPercentage] = useState<number>(0);
  const { id } = useParams();

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSend = () => {
    setOpenSnackbar(true);
    // lógica de envío real si la hubiera
  };

  useEffect(() => {
    const order = orders.find((order) => order.orderNumber === id);
    if (order) setSelectedOrder(order);
  }, [id, orders, setSelectedOrder]);

  useEffect(() => {
    const items = selectedOrder?.items ?? [];
    const validatedItems = items.filter((item) => item.status).length;
    const percentage = (validatedItems / items.length) * 100;
    const roundedPercentage = isNaN(percentage) ? 0 : percentage;

    setStatusPercentage(roundedPercentage);

    if (selectedOrder) {
      const newStatus = roundedPercentage === 100 ? "Approved" : "Pending";

      if (selectedOrder.status !== newStatus) {
        const updatedOrder = {
          ...selectedOrder,
          status: newStatus,
        };
        updateOrder(updatedOrder);
      }
    }
  }, [selectedOrder, selectedOrder?.items, updateOrder]);

  return (
    <OrderDetailHeaderComponent
      selectedOrder={selectedOrder}
      statusPercentage={statusPercentage}
      openSnackbar={openSnackbar}
      setOpenSnackbar={setOpenSnackbar}
      handleSend={handleSend}
    />
  );
};
