import { Order } from "@/core/model";
import { Box, Button, TextField } from "@mui/material";
import { FC } from "react";

interface Props {
  selectedOrder?: Order;
  statusPercentage: number;
}

export const OrderDetailHeaderComponent: FC<Props> = (props) => {
  const { selectedOrder, statusPercentage } = props;

  return (
    <>
      <Box sx={{ m: "50px", width: "1000px", display: "flex", gap: "30px" }}>
        <TextField
          disabled
          value={selectedOrder?.orderNumber}
          label="Order Nº"
        ></TextField>
        <TextField
          disabled
          value={selectedOrder?.supplier}
          label="Supplier"
        ></TextField>
        <TextField
          disabled
          value={selectedOrder?.date}
          label="Date"
        ></TextField>
      </Box>
      <Box sx={{ m: "50px", width: "1000px", display: "flex", gap: "30px" }}>
        <TextField
          disabled
          value={selectedOrder?.totalAmount}
          label="Total amount"
        ></TextField>
        <TextField
          disabled
          sx={{ width: "100px" }}
          value={`${Math.round(statusPercentage)}%`}
          label="Status"
        ></TextField>
        <Button
          variant="contained"
          disabled={!selectedOrder?.items.every((item) => item.status === true)}
        >
          Send
        </Button>
      </Box>
    </>
  );
};
