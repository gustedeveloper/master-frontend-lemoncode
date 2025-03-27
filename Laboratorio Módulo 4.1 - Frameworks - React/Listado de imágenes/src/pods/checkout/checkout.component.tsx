import { Button, Grid2, Typography } from "@mui/material";
import { FC } from "react";

export const CheckoutComponent: FC = () => {
  return (
    <Grid2
      container
      sx={{
        p: "50px",
        width: "415px",
        height: "600px",
        bgcolor: "secondary.light",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <Grid2 size={12}>
        <Grid2 container sx={{ flexDirection: "column" }}>
          <Grid2 size={4}>
            <Typography
              variant="h3"
              sx={{ fontWeight: "lighter", color: "primary.main" }}
            >
              Summary
            </Typography>
          </Grid2>
          <Grid2 size={4}>
            <Typography>Cart Total</Typography>
          </Grid2>
          <Grid2 size={4}>
            <Button variant="contained">Checkout</Button>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};
