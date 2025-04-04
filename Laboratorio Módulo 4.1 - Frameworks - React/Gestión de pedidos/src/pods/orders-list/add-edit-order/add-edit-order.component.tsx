import { Box, Button, TextField } from "@mui/material";
import { FC } from "react";

export const AddEditOrderComponent: FC = () => {
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
        <Button sx={{ width: "200px" }} variant="contained">
          Add new order
        </Button>
        <TextField
          type="text"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          label="Order Nº"
        ></TextField>
        <TextField
          type="text"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          label="Supplier"
        ></TextField>
        <TextField
          type="date"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          label="Date"
          placeholder=""
        ></TextField>
        <TextField
          disabled
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          label="Total amount"
        ></TextField>
      </Box>
    </>
  );
};
