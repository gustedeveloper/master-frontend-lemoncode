import { FC } from "react";
import { TableHeader } from "../../table-header/table-header";
import { Order } from "@/core/model";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Link as MuiLink,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { formatDate } from "@/core/utils/date";
import EditIcon from "@mui/icons-material/Edit";
import { AlertDialog } from "../../../core/components/delete-alert";

const headerElements: string[] = [
  "Status",
  "Order nº",
  "Supplier",
  "Date",
  "Total",
  "Actions",
];

interface Props {
  orders: Order[];
  deleteOrder: (value: string) => void;
  getSelectedOrderToEdit: (order: Order) => void;
}

export const OrdersListComponent: FC<Props> = (props) => {
  const { orders, deleteOrder, getSelectedOrderToEdit } = props;

  return (
    <TableContainer>
      <Table sx={{ minWidth: 850 }}>
        <TableHeader headers={headerElements} />
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.orderNumber}>
              <TableCell>
                <Box
                  sx={{
                    margin: "15px",
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor:
                      order.status === "Approved" ? "#36c430" : "orange",
                  }}
                />
              </TableCell>
              <TableCell>
                <MuiLink
                  component={Link}
                  to={`/order-detail/${order.orderNumber}`}
                  sx={{ textDecoration: "none" }}
                >
                  {order.orderNumber}
                </MuiLink>
              </TableCell>
              <TableCell>{order.supplier}</TableCell>
              <TableCell>{formatDate(order.date)}</TableCell>
              <TableCell>{order.totalAmount} €</TableCell>
              <TableCell sx={{ display: "flex", gap: "5px" }}>
                <IconButton onClick={() => getSelectedOrderToEdit(order)}>
                  <EditIcon />
                </IconButton>
                <AlertDialog
                  elementToDelete={order.orderNumber}
                  deleteElement={deleteOrder}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
