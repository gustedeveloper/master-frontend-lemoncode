import React, { FC } from "react";
import { NavBarContainer } from "../pods/navbar";
import { Header } from "./header.layout";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: FC<Props> = ({ children }) => (
  <>
    <Header children={<NavBarContainer />} />
    <div className="layout-app-container">{children}</div>
  </>
);
