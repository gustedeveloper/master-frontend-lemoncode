export interface Order {
  status: string;
  orderNumber: string;
  supplier: string;
  date: Date;
  totalAmount: number;
  items: Item[];
}

export interface Item {
  status: boolean;
  description: string;
  amount: number;
}
