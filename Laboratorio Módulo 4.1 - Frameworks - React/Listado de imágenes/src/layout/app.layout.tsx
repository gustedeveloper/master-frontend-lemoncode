import React, { FC } from "react";
import { NavBarContainer } from "../pods/navbar";
import { Header } from "./header";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: FC<Props> = ({ children }) => (
  <>
    <Header />
    <NavBarContainer />
    <div className="layout-app-container">{children}</div>
  </>
);
