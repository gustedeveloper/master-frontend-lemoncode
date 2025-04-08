import { Order } from "@/core/model";

import { Box, Button, TextField } from "@mui/material";
import { FC } from "react";

interface Props {
  order: Order;
  setOrder: (value: Order) => void;
  addEdit: () => void;
  selectedOrderToEdit?: Order;
}

export const AddEditOrderComponent: FC<Props> = (props) => {
  const { order, setOrder, addEdit, selectedOrderToEdit } = props;

  return (
    <>
      <Box
        sx={{
          m: "50px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <TextField
          type="text"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          label="Supplier"
          value={order.supplier}
          onChange={(e) => setOrder({ ...order, supplier: e.target.value })}
        ></TextField>
        <TextField
          type="date"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          label="Date"
          value={order.date.toISOString().split("T")[0]}
          onChange={(e) =>
            setOrder({ ...order, date: new Date(e.target.value) })
          }
        ></TextField>
        <Button sx={{ width: "200px" }} variant="contained" onClick={addEdit}>
          {selectedOrderToEdit ? "Edit order" : "Add new order"}
        </Button>
      </Box>
    </>
  );
};
