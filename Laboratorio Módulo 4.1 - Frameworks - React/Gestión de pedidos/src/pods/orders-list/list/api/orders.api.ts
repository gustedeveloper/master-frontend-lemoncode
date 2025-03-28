import { Order } from "@/core/model";
import { orders } from "@/core/data";

export const getOrders = (): Promise<Order[]> => {
  return new Promise((resolve) => {
    resolve(orders);
  });
};
