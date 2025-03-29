import { FC } from "react";
import { OrdersListHeader } from "../header/orders-list-header.component";
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

interface Props {
  orders: Order[];
}

export const OrdersListComponent: FC<Props> = (props) => {
  const { orders } = props;

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }}>
        <OrdersListHeader />
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
              <TableCell>{order.date.toDateString()}</TableCell>
              <TableCell>{order.totalAmount} €</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
