import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: FC<Props> = ({ children }) => (
  <div className="layout-app-container">{children}</div>
);
