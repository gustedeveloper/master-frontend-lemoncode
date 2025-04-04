import { Order } from "@/core/model";

import { Box, Button, TextField } from "@mui/material";
import { FC } from "react";

interface Props {
  newOrder: Order;
  setNewOrder: (value: Order) => void;
  addEdit: () => void;
}

export const AddEditOrderComponent: FC<Props> = (props) => {
  const { newOrder, setNewOrder, addEdit } = props;

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
          value={newOrder.supplier}
          onChange={(e) =>
            setNewOrder({ ...newOrder, supplier: e.target.value })
          }
        ></TextField>
        <TextField
          type="date"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          label="Date"
          value={newOrder.date.toISOString().split("T")[0]}
          onChange={(e) =>
            setNewOrder({ ...newOrder, date: new Date(e.target.value) })
          }
        ></TextField>
        <Button sx={{ width: "200px" }} variant="contained" onClick={addEdit}>
          Add new order
        </Button>
      </Box>
    </>
  );
};
