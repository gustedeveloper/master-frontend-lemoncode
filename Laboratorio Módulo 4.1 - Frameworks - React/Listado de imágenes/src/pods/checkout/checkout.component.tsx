import { Button, Grid2, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  totalCartBalance: number;
}

export const CheckoutComponent: FC<Props> = (props) => {
  const { totalCartBalance } = props;

  return (
    <Grid2
      container
      sx={{
        p: "50px",
        width: "415px",
        height: "400px",
        bgcolor: "secondary.light",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Grid2>
        <Typography
          variant="h3"
          sx={{ fontWeight: "lighter", color: "primary.main" }}
        >
          Summary
        </Typography>
      </Grid2>

      <Grid2 sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Balance</Typography>
        <Typography
          variant="h3"
          sx={{ fontWeight: "lighter", fontStyle: "oblique", pr: "50px" }}
        >
          {totalCartBalance.toFixed(2)} €
        </Typography>
      </Grid2>

      <Grid2 sx={{ display: "flex", justifyContent: "center" }}>
        <Button size="large" variant="contained">
          Checkout
        </Button>
      </Grid2>
    </Grid2>
  );
};
