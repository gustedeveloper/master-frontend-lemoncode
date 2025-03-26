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
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{
              color: "#cad2c5",
              m: {
                xs: "15px",
                md: "0px",
              },
            }}
          >
            Lemonstock
          </Typography>
        </Box>
        <Box>{children}</Box>
        <Box
          sx={{
            width: "142px",
            display: " flex",
            justifyContent: {
              xs: "center",
              md: "flex-end",
            },
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{
              margin: "10px 0px",
            }}
            onClick={handleDrawerOpen}
          >
            <ShoppingCartIcon />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
