import { FC, useContext } from "react";
import { PicturesContext } from "../core/context/pictures-context";
import { Drawer } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export const DrawerLayout: FC<Props> = ({ children }) => {
  const { drawer, handleDrawerClose } = useContext(PicturesContext);

  return (
    <>
      <Drawer
        variant="temporary"
        anchor="right"
        open={drawer}
        onClose={handleDrawerClose}
      >
        {children}
      </Drawer>
    </>
  );
};
