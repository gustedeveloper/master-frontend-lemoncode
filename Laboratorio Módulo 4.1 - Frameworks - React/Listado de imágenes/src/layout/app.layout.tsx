import React, { FC } from "react";
import { NavBarContainer } from "../pods/navbar";
import { Header } from "./header.layout";
import { Container } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: FC<Props> = ({ children }) => (
  <>
    <Header children={<NavBarContainer />} />
    <Container
      sx={{ mt: "100px", display: "flex", justifyContent: "space-evenly" }}
    >
      {children}
    </Container>
  </>
);
