import React, { FC } from "react";
import { NavBarContainer } from "../pods/navbar";
import { Header } from "./header.layout";
import { Grid2 } from "@mui/material";

interface Props {
  children: React.ReactNode | [React.ReactNode, React.ReactNode];
}

export const AppLayout: FC<Props> = ({ children }) => (
  <>
    <Header children={<NavBarContainer />} />
    <Grid2
      container
      sx={{
        m: "50px",
        mt: {
          xs: "14px",
          md: "65px",
        },
      }}
    >
      <Grid2 size={12} sx={{ display: "flex", justifyContent: "center" }}>
        {children}
      </Grid2>
    </Grid2>
  </>
);
