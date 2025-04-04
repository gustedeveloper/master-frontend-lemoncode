import { Order } from "../model";

export const generateOrderNumber = (orders: Order[]): string => {
  const lastOrderNumberWithoutLastDigit = orders[
    orders.length - 1
  ]?.orderNumber.slice(0, -1);

  let lastDigit = Number(orders[orders.length - 1]?.orderNumber.slice(-1));

  lastDigit += 1;

  return lastOrderNumberWithoutLastDigit + lastDigit.toString();
};
