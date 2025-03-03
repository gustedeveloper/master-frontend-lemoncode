import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface Pages {
  id: number;
  name: string;
  path: string;
}

const pages: Pages[] = [
  {
    id: 1,
    name: "Org members",
    path: "/list",
  },
  {
    id: 2,
    name: "Rick and Morty",
    path: "/characters",
  },
];

export const NavbarComponent = () => {
  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          {pages.map((page) => (
            <Button
              sx={{
                color: "white",
                padding: "20px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
              key={page.name}
              component={Link}
              to={page.path}
            >
              {page.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
