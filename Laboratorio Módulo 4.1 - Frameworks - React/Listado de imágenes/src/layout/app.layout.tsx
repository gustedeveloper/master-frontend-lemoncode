import React, { FC } from "react";
import { NavBarContainer } from "../pods/navbar";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: FC<Props> = ({ children }) => (
  <>
    <NavBarContainer />
    <div className="layout-app-container">{children}</div>
  </>
);
