import { FC, useContext } from "react";
import {
  Button,
  Divider,
  Drawer,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import { PicturesContext } from "../../core/context/pictures-context";
import { CartContainer } from "../cart";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export const CartInsideDrawer: FC = () => {
  const {
    drawer,
    handleDrawerClose,
    totalCartBalance,
    removeAll,
    selectedPictures,
  } = useContext(PicturesContext);

  const navigate = useNavigate();

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={drawer}
      onClose={handleDrawerClose}
    >
      <Grid2 size={12}>
        <IconButton onClick={handleDrawerClose} sx={{ p: "5px", m: "15px" }}>
          <ChevronRightIcon />
        </IconButton>
      </Grid2>
      <Divider />
      <CartContainer />

      {selectedPictures.length !== 0 ? (
        <Grid2
          sx={{
            display: "flex",
            justifyContent: "center",
            pb: "30px",
          }}
        >
          <Grid2
            container
            sx={{
              flexDirection: "column",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            <Grid2 sx={{ textAlign: "center" }}>
              <Typography variant="h6" color="primary.main">
                Total balance: {totalCartBalance.toFixed(2)} €
              </Typography>
            </Grid2>
            <Grid2
              sx={{
                display: "flex",
                gap: "10px",
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
              <Button
                variant="outlined"
                size="small"
                startIcon={<DeleteIcon />}
                onClick={removeAll}
              >
                Remove All
              </Button>
              <Button
                sx={{ width: "130px" }}
                variant="contained"
                size="small"
                onClick={() => navigate("/checkout")}
              >
                Checkout
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>
      ) : (
        <></>
      )}
    </Drawer>
  );
};
