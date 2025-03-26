import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { FC, useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { PicturesContext } from "../core/context/pictures-context";

interface Props {
  children: React.ReactNode;
}

export const Header: FC<Props> = ({ children }) => {
  const { handleDrawerOpen } = useContext(PicturesContext);
  return (
    <AppBar position="fixed" sx={{ bgcolor: "#354f52" }}>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#cad2c5",
            flex: 1,
            m: {
              xs: "15px",
              md: "0px",
            },
          }}
        >
          Lemonstock
        </Typography>
        <Box
          sx={{
            display: "flex",
            flex: 1.5,
          }}
        >
          {children}
        </Box>
        <Button variant="contained" color="secondary">
          <ShoppingCartIcon onClick={handleDrawerOpen} />
        </Button>
      </Toolbar>
    </AppBar>
  );
};
