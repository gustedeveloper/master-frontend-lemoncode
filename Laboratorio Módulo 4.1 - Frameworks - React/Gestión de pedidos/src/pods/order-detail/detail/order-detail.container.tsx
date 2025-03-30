import { FC, useContext, useEffect, useState } from "react";
import { OrderDetailComponent } from "./order-detail.component";
import { OrdersContext } from "@/core/context/orders-context";

export const OrderDetailContainer: FC = () => {
  const { selectedOrder } = useContext(OrdersContext);
  const [statusPercentage, setStatusPercentage] = useState<number>(0);

  const getStatusPercentage = () => {
    const items = selectedOrder?.items;
    let validatedItems = 0;
    if (items) {
      items.forEach((item) => {
        if (item.status) validatedItems += 1;
      });

      return (validatedItems / items.length) * 100;
    }
  };

  useEffect(() => {
    const percentage = getStatusPercentage();
    if (percentage) setStatusPercentage(percentage);
  }, [selectedOrder]);

  return (
    <OrderDetailComponent
      selectedOrder={selectedOrder}
      statusPercentage={statusPercentage}
    />
  );
};
