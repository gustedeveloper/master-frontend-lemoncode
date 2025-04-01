import { Item } from "@/core/model";
import { TableHeader } from "@/pods/table-header/table-header";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { FC } from "react";

interface Props {
  items: Item[];
}

const headerElements: string[] = ["", "Status", "Description", "Amount"];

export const OrderDetailComponent: FC<Props> = (props) => {
  const { items } = props;
  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHeader headers={headerElements} />
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.description}>
                <TableCell></TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.amount} €</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
