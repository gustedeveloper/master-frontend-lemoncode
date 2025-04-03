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
} from "@mui/material";
import { Link } from "react-router-dom";
import { formatDate } from "@/core/utils/date";

const headerElements: string[] = [
  "Status",
  "Order nº",
  "Supplier",
  "Date",
  "Total",
];

interface Props {
  orders: Order[];
}

export const OrdersListComponent: FC<Props> = (props) => {
  const { orders } = props;

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }}>
        <TableHeader headers={headerElements} />
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.orderNumber}>
              <TableCell>
                <Box
                  sx={{
                    marginRight: "6px",
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
