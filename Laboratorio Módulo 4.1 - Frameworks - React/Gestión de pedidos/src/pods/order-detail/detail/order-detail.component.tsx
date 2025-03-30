import { Order } from "@/core/model";
import { Box, Button, TextField } from "@mui/material";
import { FC } from "react";

interface Props {
  selectedOrder?: Order;
}

export const OrderDetailComponent: FC<Props> = (props) => {
  const { selectedOrder } = props;

  return (
    <Box sx={{ m: "50px", width: "1000px", display: "flex", gap: "30px" }}>
      <TextField
        value={selectedOrder?.totalAmount}
        label="Total amount"
      ></TextField>
      <TextField
        sx={{ width: "100px" }}
        value={selectedOrder?.status}
        label="Status"
      ></TextField>
      <Button variant="contained">Send</Button>
    </Box>
  );
};
