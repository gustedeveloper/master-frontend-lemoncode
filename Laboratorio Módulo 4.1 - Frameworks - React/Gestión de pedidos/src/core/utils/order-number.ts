import { Order } from "../model";

/**
 * Generates a new order number in the format: P-YYYYMMDD-XXX
 * - YYYYMMDD: current date
 * - XXX: sequential number for the day (3 digits, e.g., 001, 002)
 *
 * If there are existing orders for today, it increments the highest number.
 * If none exist, it starts at 001.
 */

export const generateOrderNumber = (orders: Order[]): string => {
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0].replaceAll("-", "");
  const prefix = `P-${formattedDate}`;

  const numbersToday = orders
    .filter((order) => order.orderNumber.startsWith(prefix))
    .map((order) => parseInt(order.orderNumber.split("-")[2], 10));

  const nextNumber =
    numbersToday.length > 0 ? Math.max(...numbersToday) + 1 : 1;

  return `${prefix}-${String(nextNumber).padStart(3, "0")}`;
};
