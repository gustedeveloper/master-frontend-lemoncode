import { Order } from "./model";

export const orders: Order[] = [
  {
    status: "Pending",
    orderNumber: "P-20250328-001",
    supplier: "TechDistributor S.L.",
    date: new Date("2025-03-28"),
    totalAmount: 1205.97,
    items: [
      {
        id: "a1",
        isChecked: false,
        status: false,
        description: "AMD Ryzen 7 7800X3D Processor",
        amount: 449.99,
      },
      {
        id: "a2",
        isChecked: false,
        status: true,
        description: "MSI MAG B550 TOMAHAWK Motherboard",
        amount: 179.99,
      },
      {
        id: "a3",
        isChecked: false,
        status: false,
        description: "Corsair Vengeance LPX 32GB (2 x 16GB) DDR4 3600MHz RAM",
        amount: 175.99,
      },
    ],
  },
  {
    status: "Pending",
    orderNumber: "P-20250328-002",
    supplier: "PC Components Spain",
    date: new Date("2025-03-27"),
    totalAmount: 1964.95,
    items: [
      {
        id: "b1",
        isChecked: false,
        status: true,
        description: "NVIDIA RTX 4070 Ti 12GB Graphics Card",
        amount: 899.99,
      },
      {
        id: "b2",
        isChecked: false,
        status: false,
        description: "Samsung 990 PRO 2TB NVMe M.2 SSD",
        amount: 199.99,
      },
      {
        id: "b3",
        isChecked: false,
        status: true,
        description: "Corsair RM850x 850W 80 Plus Gold Power Supply",
        amount: 149.99,
      },
      {
        id: "b4",
        isChecked: false,
        status: false,
        description: "NZXT H510 Elite ATX Case - Black",
        amount: 149.99,
      },
      {
        id: "b5",
        isChecked: false,
        status: true,
        description: "LG UltraGear 27GP850-B 27 QHD 165Hz Monitor",
        amount: 564.99,
      },
    ],
  },
];
