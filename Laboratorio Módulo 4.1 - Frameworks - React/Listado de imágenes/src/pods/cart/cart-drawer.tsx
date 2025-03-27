import { FC, useContext } from "react";
import { Drawer } from "@mui/material";
import { PicturesContext } from "../../core/context/pictures-context";
import { CartContainer } from "../cart";

export const CartInsideDrawer: FC = () => {
  const { drawer, handleDrawerClose } = useContext(PicturesContext);

  return (
    <>
      <Drawer
        variant="temporary"
        anchor="right"
        open={drawer}
        onClose={handleDrawerClose}
      >
        <CartContainer />
      </Drawer>
    </>
  );
};
