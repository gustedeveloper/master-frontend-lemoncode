import { AppBar, Box, Button, Tab, Tabs, Toolbar } from "@mui/material";
import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";

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

export const NavbarComponent: FC = () => {
  const location = useLocation();

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
        ></Box>
        <Tabs
          value={location.pathname}
          textColor="inherit"
          indicatorColor="secondary"
        >
          {pages.map((page) => (
            <Tab
              key={page.id}
              label={page.name}
              value={page.path}
              component={Link}
              to={page.path}
              sx={{ fontSize: "16px" }}
            ></Tab>
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};
