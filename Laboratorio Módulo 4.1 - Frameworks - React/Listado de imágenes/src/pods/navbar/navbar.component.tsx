import { Tab, Tabs } from "@mui/material";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

interface Pages {
  id: number;
  name: string;
  path: string;
}

const pages: Pages[] = [
  {
    id: 1,
    name: "City category",
    path: "/city-category",
  },
  {
    id: 2,
    name: "Nature category",
    path: "/landscape-category",
  },
];

export const NavBarComponent: FC = () => {
  const location = useLocation();

  return (
    <Tabs
      value={location.pathname}
      textColor="inherit"
      indicatorColor="secondary"
      sx={{
        "& .MuiTabs-flexContainer": {
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
        },
      }}
    >
      {pages.map((page) => (
        <Tab
          key={page.id}
          label={page.name}
          value={page.path}
          component={Link}
          to={page.path}
          sx={{
            fontSize: "16px",
          }}
        ></Tab>
      ))}
    </Tabs>
  );
};
