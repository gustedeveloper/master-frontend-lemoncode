import { TableCell, TableHead } from "@mui/material";
import { FC } from "react";

const headerElements: string[] = [
  "Status",
  "Order nº",
  "Supplier",
  "Date",
  "Total",
];

export const OrdersListHeader: FC = () => {
  return (
    <>
      <TableHead>
        {headerElements.map((element) => (
          <TableCell>{element}</TableCell>
        ))}
      </TableHead>
    </>
  );
};
