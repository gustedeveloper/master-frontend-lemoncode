export interface Order {
  status: string;
  orderNumber: string;
  supplier: string;
  date: Date;
  totalAmount: number;
  items: Item[];
}

export interface Item {
  id: string;
  isChecked: boolean;
  status: boolean;
  description: string;
  amount: number;
}
