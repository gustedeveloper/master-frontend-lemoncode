import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { FC, useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { PicturesContext } from "../core/context/pictures-context";
import { useLocation } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export const Header: FC<Props> = ({ children }) => {
  const { handleDrawerOpen } = useContext(PicturesContext);

  const location = useLocation();

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
              color: "secondary.light",
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
        {location.pathname !== "/" ? (
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
              <ShoppingCartIcon color="action" />
            </Button>
          </Box>
        ) : (
          <></>
        )}
      </Toolbar>
    </AppBar>
  );
};
