import { Item } from "../model";

export const generateItemId = (
  orderItems: Item[],
  orderIndex: number
): string => {
  const letter = String.fromCharCode(97 + orderIndex); // 97 = 'a', 98 = 'b', etc.
  const nextNumber = orderItems.length + 1;
  return `${letter}${nextNumber}`;
};
