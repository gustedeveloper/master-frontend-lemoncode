import { FC, useContext } from "react";
import { Divider, Drawer, Grid2, IconButton } from "@mui/material";
import { PicturesContext } from "../../core/context/pictures-context";
import { CartContainer } from "../cart";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const CartInsideDrawer: FC = () => {
  const { drawer, handleDrawerClose } = useContext(PicturesContext);

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
    </Drawer>
  );
};
