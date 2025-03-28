import { TableCell, TableHead, TableRow } from "@mui/material";
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
        <TableRow>
          {headerElements.map((element) => (
            <TableCell>{element}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    </>
  );
};
