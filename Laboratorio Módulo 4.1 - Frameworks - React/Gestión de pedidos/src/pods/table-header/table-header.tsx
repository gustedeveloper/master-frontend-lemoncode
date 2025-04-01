import { TableCell, TableHead, TableRow } from "@mui/material";
import { FC } from "react";

interface TableHeaderProps {
  headers: string[];
}

export const TableHeader: FC<TableHeaderProps> = ({ headers }) => {
  return (
    <>
      <TableHead>
        <TableRow>
          {headers.map((element) => (
            <TableCell>{element}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    </>
  );
};
