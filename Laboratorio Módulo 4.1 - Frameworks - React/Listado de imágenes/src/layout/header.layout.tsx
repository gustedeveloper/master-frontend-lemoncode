import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export const Header: FC<Props> = ({ children }) => (
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
    </Toolbar>
  </AppBar>
);
