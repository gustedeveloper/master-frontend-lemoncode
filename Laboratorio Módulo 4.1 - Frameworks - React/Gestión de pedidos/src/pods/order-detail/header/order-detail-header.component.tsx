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
        value={selectedOrder?.orderNumber}
        label="Order Nº"
      ></TextField>
      <TextField
        disabled
        value={selectedOrder?.supplier}
        label="Supplier"
      ></TextField>
      <TextField disabled value={selectedOrder?.date} label="Date"></TextField>
    </Box>
  );
};
