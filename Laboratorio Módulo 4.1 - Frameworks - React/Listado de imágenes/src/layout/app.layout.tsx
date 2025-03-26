import React, { FC } from "react";
import { NavBarContainer } from "../pods/navbar";
import { Header } from "./header.layout";
import { Grid2 } from "@mui/material";

interface Props {
  children: [React.ReactNode, React.ReactNode];
}

export const AppLayout: FC<Props> = ({ children }) => (
  <>
    <Header children={<NavBarContainer />} />
    <Grid2
      container
      sx={{
        mt: {
          xs: "145px",
          md: "65px",
        },
        justifyContent: "space-evenly",
      }}
    >
      <Grid2 size={12}>
        <Grid2
          container
          spacing={2}
          sx={{
            p: {
              xs: "0 30px",
              md: "0px 60px",
            },
          }}
        >
          <Grid2 size={{ xs: 6, sm: 8, md: 7.5, lg: 9, xl: 10 }}>
            {children[0]}
          </Grid2>
          <Grid2 size={{ xs: 6, sm: 4, md: 4.5, lg: 3, xl: 2 }}>
            {children[1]}
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  </>
);
