import { Order } from "@/core/model";
import { Box, TextField } from "@mui/material";
import { FC } from "react";

interface Props {
  selectedOrder?: Order;
}

export const OrderDetailHeaderComponent: FC<Props> = (props) => {
  const { selectedOrder } = props;

  return (
    <Box sx={{ m: "50px", width: "1000px", display: "flex", gap: "30px" }}>
      <TextField
        disabled
        defaultValue={selectedOrder?.orderNumber}
        label="Order Nº"
      ></TextField>
      <TextField
        disabled
        defaultValue={selectedOrder?.supplier}
        label="Supplier"
      ></TextField>
      <TextField
        disabled
        defaultValue={selectedOrder?.date}
        label="Date"
      ></TextField>
    </Box>
  );
};
