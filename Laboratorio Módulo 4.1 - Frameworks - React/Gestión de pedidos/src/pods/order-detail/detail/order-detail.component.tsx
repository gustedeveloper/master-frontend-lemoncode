import { Item } from "@/core/model";
import { TableHeader } from "@/pods/table-header/table-header";
import {
  Box,
  Button,
  Checkbox,
  Input,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { FC } from "react";

interface Props {
  items: Item[];
  handleCheckbox: (id: string) => void;
  validate: () => void;
  invalidate: () => void;
}

const headerElements: string[] = ["", "Status", "Description", "Amount"];

export const OrderDetailComponent: FC<Props> = (props) => {
  const { items, handleCheckbox, validate, invalidate } = props;
  return (
    <>
      <Box sx={{ display: "flex", gap: "15px", ml: "50px" }}>
        <Button variant="contained" onClick={validate}>
          Validate
        </Button>
        <Button variant="contained" onClick={invalidate}>
          Invalidate
        </Button>
      </Box>
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHeader headers={headerElements} />
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.description}>
                <TableCell>
                  <Checkbox
                    checked={item.isChecked}
                    onChange={() => handleCheckbox(item.id)}
                  />
                </TableCell>
                <TableCell sx={{ color: item.status ? "#36c430" : "orange" }}>
                  {item.status ? "Validated" : "Pending"}
                </TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>
                  <Input value={`${item.amount} €`} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
